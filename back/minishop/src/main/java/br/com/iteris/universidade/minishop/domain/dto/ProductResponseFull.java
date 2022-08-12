package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

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

   private List<ProductImage> imagens;

   private String URL;

    public ProductResponseFull(Product product) {
        Id = product.getId();
        ProductName = product.getProductName();
        UnitPrice = product.getUnitPrice();
        IsDiscontinued = product.getIsDiscontinued();
        SupplierId = product.getSupplierId();
        PackageName = product.getPackageName();
        NomeSupplier = product.getSupplier().getNome();
        if (product.getImages().size() == 0 ) {
            listaUrls = null;
        } /*else if (product.getProductImage().getSequencia() != 1) {
            imagemPrincipal = null;
        }*/
        else{
            List<String> lista = new ArrayList<>();
            lista.add(product.getProductImage().getURL());
            System.out.println("///////////////////////////////////////////////////////////////////////////////// entrou sim confia");
            this.listaUrls = lista;
        }
    }
}
