package br.com.iteris.universidade.minishop.intro.fixture;

import br.com.iteris.universidade.minishop.domain.dto.ProductCreateRequest;
import br.com.iteris.universidade.minishop.domain.entity.Product;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
@UtilityClass
public class ProductFixture {

    public static ProductCreateRequest productCreateValido() {
        return ProductCreateRequest.builder()
                .ProductName("Livro")
                .SupplierId(1)
                .IsDiscontinued(false)
                .UnitPrice(55.00)
                .PackageName("Amazon")
                .build();
    }

    public static Product productValido() {
        return Product.builder()
                .id(1L)
                .productName("Livro")
                .supplierId(1)
                .isDiscontinued(false)
                .unitPrice(55.00)
                .packageName("Amazon")
                .build();
        }
}
