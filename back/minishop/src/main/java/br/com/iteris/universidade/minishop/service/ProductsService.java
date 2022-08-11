package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.repository.ProductsRepository;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductsService {
    private final ProductsRepository productsRepository;
    private final SupplierRespository supplierRespository;

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
        product.setSupplierId(productUpdateRequest.getSupplierId());
        System.out.println(productUpdateRequest.getUnitPrice());
        product.setUnitPrice(productUpdateRequest.getUnitPrice());
        product.setIsDiscontinued(productUpdateRequest.getIsDiscontinued());
        product.setPackageName(productUpdateRequest.getPackageName());

        Product produtoSalvo = productsRepository.save(product);

        return new ResponseBase<>(new ProductResponse(produtoSalvo));
    }

    public ResponseBase<ProductResponse> cadastrar(ProductCreateRequest novo) {
        Optional<Supplier> supplierOptional = supplierRespository.findById(novo.getSupplierId());

        if (supplierOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado ou inexistente");
        }

        Product modeloDb = new Product();
        modeloDb.setProductName(novo.getProductName());
        modeloDb.setSupplierId(novo.getSupplierId());
        modeloDb.setUnitPrice(novo.getUnitPrice());
        modeloDb.setIsDiscontinued(novo.getIsDiscontinued());
        modeloDb.setPackageName(novo.getPackageName());

        Product productSalvo = productsRepository.save(modeloDb);

        ProductResponse productResponse = new ProductResponse((productSalvo));
        return new ResponseBase<>(productResponse);
    }
}
