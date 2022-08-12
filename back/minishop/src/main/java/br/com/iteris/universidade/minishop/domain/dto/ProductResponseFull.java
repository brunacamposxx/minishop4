package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import lombok.Data;

import java.util.ArrayList;
import java.util.Comparator;
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

   //private List<ProductImage> imagens;

    public ProductResponseFull(Product product) {
        Id = product.getId();
        ProductName = product.getProductName();
        UnitPrice = product.getUnitPrice();
        IsDiscontinued = product.getIsDiscontinued();
        SupplierId = product.getSupplierId();
        PackageName = product.getPackageName();
        NomeSupplier = product.getSupplier().getNome();


        if (product.getImages().size() == 0 ) {
            listaUrls = new ArrayList<>();
        }
        else{
            List<String> lista = new ArrayList<>();

                product.getImages().forEach(productImage -> {
                   // System.out.println("/////////////////////----------------////////////////////////////////" + productImage.getURL());
                    lista.add(productImage.getURL());
                });

                //lista.sort(Comparator.comparing();

            //System.out.println("///////////////////////////////////////////////////////////////////////////////// entrou sim confia");
            this.listaUrls = lista;
        }
    }
}
