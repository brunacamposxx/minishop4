package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;

import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.Data;

import javax.persistence.Column;
import java.util.List;

@Data
public class ProductResponse {
    private long Id;
    private String ProductName;

    private Double UnitPrice;
    private boolean IsDiscontinued;

    private String imagemPrincipal;

   // private List<ProductImage> imagens;

    public ProductResponse(Product product) {
        Id = product.getId();
        ProductName = product.getProductName();
        UnitPrice = product.getUnitPrice();
        IsDiscontinued = product.getIsDiscontinued();
        if (product.getImages().size() == 0 ) {
            imagemPrincipal = null;
        } else if (product.getProductImage().getSequencia() != 1) {
            System.out.println("/////////////////////////////////////////////////////////////////////////////////////////////// entrou aqui óh");
            imagemPrincipal = null;
        }
        else{
            imagemPrincipal = product.getProductImage().getURL();
        }
    }

}
