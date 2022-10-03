package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageResponse {

    private Long id;
    private String url;
    private Integer sequence;

    public ProductImageResponse(ProductImage productImage) {
        this.id = productImage.getId();
        this.url = productImage.getURL();
        this.sequence = productImage.getSequencia();
    }
}
