package br.com.iteris.universidade.minishop.intro.Service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;

import br.com.iteris.universidade.minishop.intro.fixture.ProductFixture;
import br.com.iteris.universidade.minishop.intro.fixture.SupplierFixture;
import br.com.iteris.universidade.minishop.repository.ProductsRepository;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import br.com.iteris.universidade.minishop.service.ProductsService;
import br.com.iteris.universidade.minishop.service.SupplierService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {
    @Mock
    private ProductsRepository productsRepository;

    @InjectMocks
    private ProductsService productsService;
    @Mock
    private  SupplierRespository supplierRepository;

    @Test
    void should_Create_ThenReturn_ProductCreated() {
        final ProductCreateRequest productCreateRequest = ProductFixture.productCreateValido();
        final Product esperadoProduct = ProductFixture.productValido();

        when(supplierRepository.findById(any())).thenReturn(Optional.of(SupplierFixture.supplierValido()));
        when(productsRepository.save(any(Product.class))).thenReturn(esperadoProduct);



        final ResponseBase<ProductResponse> atualResponseBase = productsService.cadastrar(productCreateRequest);
        final ProductResponse atualProductResponse = atualResponseBase.getObjetoRetorno();

        assertAll(
                () -> assertNotNull(atualProductResponse.getId()),
                () -> verify(productsRepository, times(1)).save(any(Product.class)),
                () -> assertEquals(esperadoProduct.getId(), atualProductResponse.getId()),
                () -> assertEquals(esperadoProduct.getProductName(), atualProductResponse.getProductName()),
                () -> assertEquals(esperadoProduct.getUnitPrice(), atualProductResponse.getUnitPrice()),
                () -> assertEquals(esperadoProduct.getIsDiscontinued(), atualProductResponse.isIsDiscontinued())

        );
    }
}
