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

    //private SupplierResponse supplier;
    //private String packageName;
    private Double UnitPrice;
    private boolean IsDiscontinued;

    private String imagemPrincipal;

   // private List<ProductImage> imagens;

    public ProductResponse(Product product) {
        this.Id = product.getId();
        this.ProductName = product.getProductName();
        //this.supplier = new SupplierResponse(product.getSupplier());
        //this.packageName = product.getPackageName();
        this.UnitPrice = product.getUnitPrice();
        this.IsDiscontinued = product.getIsDiscontinued();
        if (product.getImages().size() == 0 ) {
            imagemPrincipal = null;
        } else if (product.getProductImage().getSequencia() != 1) {
            imagemPrincipal = null;
        }
        else{
            imagemPrincipal = product.getProductImage().getURL();
        }
    }

}
