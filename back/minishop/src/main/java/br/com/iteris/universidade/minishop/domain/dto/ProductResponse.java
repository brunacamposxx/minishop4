package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;

import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class ProductResponse {
    private long Id;
    private String ProductName;
    private Double UnitPrice;
    private boolean IsDiscontinued;
    private List<ProductImageResponse> imagens;

    public ProductResponse(Product product) {
        this.Id = product.getId();
        this.ProductName = product.getProductName();
        this.UnitPrice = product.getUnitPrice();
        this.IsDiscontinued = product.getIsDiscontinued();

        List<ProductImage> productImage = product.getProductImage();
            if (productImage != null && !productImage.isEmpty())
                this.imagens = productImage.stream().map(ProductImageResponse::new).collect(Collectors.toList());


    }
}
