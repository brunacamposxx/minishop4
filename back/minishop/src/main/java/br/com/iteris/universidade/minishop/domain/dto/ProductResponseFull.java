package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import lombok.Data;

@Data
public class ProductResponseFull {
    private long Id;
    private String ProductName;
    private Double UnitPrice;
    private boolean IsDiscontinued;
    private Integer SupplierId;
    private String PackageName;

    private String NomeSupplier;

    //private String URL;

    public ProductResponseFull(Product product) {
        Id = product.getId();
        ProductName = product.getProductName();
        UnitPrice = product.getUnitPrice();
        IsDiscontinued = product.getIsDiscontinued();
        SupplierId = product.getSupplierId();
        PackageName = product.getPackageName();
        NomeSupplier = product.getSupplier().getNome();
    }
}
