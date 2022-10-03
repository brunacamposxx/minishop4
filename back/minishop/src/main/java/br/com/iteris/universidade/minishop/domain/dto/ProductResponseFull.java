package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.Data;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
public class ProductResponseFull {
    private long Id;
    private String ProductName;
    private Double UnitPrice;
    private boolean IsDiscontinued;
    private Integer SupplierId;
    private String PackageName;

    private String NomeSupplier;

   private List<String> listaUrls;

   private List<ProductImageResponse> imagens;

    public ProductResponseFull(Product product) {
        this.Id = product.getId();
        this.ProductName = product.getProductName();
        this.UnitPrice = product.getUnitPrice();
        this.IsDiscontinued = product.getIsDiscontinued();
        this.SupplierId = product.getSupplierId();
        this.PackageName = product.getPackageName();
        this.NomeSupplier = product.getSupplier().getNome();
        this.imagens = transform(product.getProductImage());

    }
    private List<ProductImageResponse> transform(List<ProductImage> productImage) {
        if (Objects.isNull(productImage))
            return new ArrayList<>();

        return productImage.stream().map(ProductImageResponse::new).collect(Collectors.toList());
    }
}
