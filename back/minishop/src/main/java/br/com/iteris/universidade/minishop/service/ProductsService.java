package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.repository.ProductImageRepository;
import br.com.iteris.universidade.minishop.repository.ProductsRepository;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.net.URI;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductsService {
    private final ProductsRepository productsRepository;
    private final SupplierRespository supplierRespository;
    private final ProductImageRepository productImageRepository;

    public ResponseBase<Page<ProductResponse>> pesquisar(SearchProductsRequest searchRequest) {
        if (searchRequest.getPaginaAtual() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página deve começar em 0");
        }

        if (searchRequest.getQtdPorPagina() < 1 || searchRequest.getQtdPorPagina() > 50) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por página deve ser entre 1 e 50 itens");
        }

        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());
        Page<Product> paginatedResponse;

        paginatedResponse = productsRepository.findAll(pageRequest);

        return new ResponseBase<>(paginatedResponse.map(ProductResponse::new));
    }

    public ResponseBase<ProductResponseFull> pesquisarPorId(long id) {
        Optional<Product> productOptional = productsRepository.findById(id);

        Product product = productOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado!"));

        ProductResponseFull productResponse = new ProductResponseFull((product));

        return new ResponseBase<>(productResponse);
    }

    public ResponseBase<ProductResponse> editarPorId(long id, ProductUpdateRequest productUpdateRequest) {
        Optional<Product> produtoEncontrado = productsRepository.findById(id);

        if (produtoEncontrado.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
        }

        Product product = produtoEncontrado.get();

        product.setProductName(productUpdateRequest.getProductName());
        //product.setSupplierId(productUpdateRequest.getSupplierId());
        //System.out.println(productUpdateRequest.getUnitPrice());
        product.setUnitPrice(productUpdateRequest.getUnitPrice());
        product.setIsDiscontinued(productUpdateRequest.getIsDiscontinued());
        product.setPackageName(productUpdateRequest.getPackageName());

      List<ProductImageResponse> productImages = new ArrayList<>();

        Product produtoSalvo = productsRepository.save(product);

        List<ProductImage> editProductImages = new ArrayList<>();
//
        Integer Count = 1;
        for (String url : productUpdateRequest.getUrlImage()) {
            Optional<ProductImage> optional = productImageRepository.findByURL(url);

            if (optional.isEmpty()) {
                ProductImage productImage = new ProductImage();
                productImage.setProduct(product);
                productImage.setURL(url);
                productImage.setSequencia(Count);
                editProductImages.add(productImage);
                productImageRepository.save(productImage);
            } else {
                ProductImage productImage = optional.get();
                productImage.setProduct(product);
                productImage.setURL(url);
                editProductImages.add(productImage);
                productImage.setSequencia(Count);
                productImageRepository.save(productImage);
            }
            Count++;

            product.setProductImage(editProductImages);
        }

        return new ResponseBase<>(new ProductResponse(produtoSalvo));
    }

    public ResponseBase<ProductResponse> cadastrar(ProductCreateRequest postModel) {
        Optional<Supplier> supplierOptional = supplierRespository.findById(postModel.getSupplierId());
        Supplier supplier  = supplierOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não Cadastrado"));

        Product product = new Product();
        product.setProductName(postModel.getProductName());
        product.setSupplier(supplier);
        product.setUnitPrice(postModel.getUnitPrice());
        product.setIsDiscontinued(false);
        product.setPackageName(postModel.getPackageName());
        product.setProductImage(setProductImagesList(product, postModel.getUrlList()));

        Product productsalvo = productsRepository.save(product);

        return new ResponseBase<>(new ProductResponse(productsalvo));
    }
    public String getPressignedURL(String fileName) {

        try {
            // Objetos necessários
            String bucketName = "minishop-imagens";
            // Get an Amazon S3 Client
            // Endpoint do nosso ambiente de testes: http://localhost:4566
            S3Presigner presigner = S3Presigner.builder()
                    .endpointOverride(URI.create("http://localhost:4566"))
                    .build();

            // Criando objetos de requisição
            PutObjectRequest objectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();

            PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(10))
                    .putObjectRequest(objectRequest)
                    .build();

            // Gera URL e retorna
            PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);
            return presignedRequest.url().toString();

        } catch (S3Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    private List <ProductImage> setProductImagesList(Product product, List<String> urlList) {
        if(Objects.isNull(urlList) || urlList.isEmpty())
            return null;

        ArrayList<ProductImage> productImageList = new ArrayList<>();
        ProductImage productImage;
        Integer sequenceCounter = 1;
        for (String url : urlList) {
            if(!url.trim().isEmpty()) {
                productImage = new ProductImage();
                productImage.setProduct(product);
                productImage.setSequencia(sequenceCounter);
                productImage.setURL(url.trim());
                productImageList.add(productImage);
                sequenceCounter++;
            }
        }

        return productImageList;
    }
//    private List<ProductImage> editProductImages(Product product, List<String> urlList) {
//        List<ProductImage> editProductImages = new ArrayList<>();
//
//        Integer Count = 1;
//        for (String url : urlList) {
//            Optional<ProductImage> optional = productImageRepository.findByURL(url);
//            ProductImage productImage;
//
//            if (optional.isPresent()) {
//                productImage = optional.get();
//                productImage.setSequencia(Count++);
//            } else {
//                productImage = new ProductImage();
//                productImage.setProduct(product);
//                productImage.setURL(url);
//                productImage.setSequencia(Count++);
//            }
//
//            ProductImage savedProductImage = productImageRepository.save(productImage);
//            editProductImages.add(savedProductImage);
//        }
//
//        List<ProductImage> productImages = productImageRepository.findAllByProductID(product.getId());
//        List<ProductImage> deleteListDataBase = productImages
//                .stream().filter(productImage -> !editProductImages.contains(productImage))
//                .toList();
//
//        productImageRepository.deleteAll(deleteListDataBase);
//
//        return editProductImages;
//    }

}

