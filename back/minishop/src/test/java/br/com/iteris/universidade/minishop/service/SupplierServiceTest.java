package br.com.iteris.universidade.minishop.service;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.domain.dto.SupplierCreateRequest;
import br.com.iteris.universidade.minishop.domain.dto.SupplierResponse;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class SupplierServiceTest {
    @Mock
    private SupplierRespository supplierRespository;
    @InjectMocks
    private SupplierService supplierService;
    /*@Test
    void should_Create_ThenReturn_SupplierCreated(){
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestValid();
        final Supplier expectedSupplier = SupplierFixture.supplierValid();
        when(supplierRespository.save(any(Supplier.class))).thenReturn(expectedSupplier);
        final ResponseBase<SupplierResponse> actualResponseBase = supplierService.createSupplier(supplierCreateRequest);
        final SupplierResponse actualSupplierResponse = actualResponseBase.getObject();
        assertAll(
                ()-> assertNotNull(actualSupplierResponse.getId()),
                ()-> verify(supplierRepository).save(any(Supplier.class)),
                ()->assertEquals(expectedSupplier.getUF().toString(),actualSupplierResponse.getUf())
        );
    }
    @Test
    void should_UFInvalid_ThenReturn_Exception() {
        final String expectedMessage = "UF não encontrada!";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithUF("AA");
        final var actualException = assertThrows(
                IllegalArgumentException.class,
                () -> supplierService.createSupplier(supplierCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getMessage()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
    @ParameterizedTest
    @ValueSource(strings = {"44444444444444","1457245700", "14578AGR000185"})
    void should_CNPJInvalid_ThenReturn_Exception(String input){
        final String expectedMessage = "CNPJ invalido.";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithCNPJ(input);
        final var actualException = assertThrows(
                IllegalArgumentException.class,
                () -> supplierService.createSupplier(supplierCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getMessage()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
    @Test
    void should_CNPJRepeated_ThenReturn_Exception() {
        final String expectedMessage = "CNPJ já cadastrado.";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestValid();
        when(supplierRepository.findByCNPJ(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValid()));
        final var actualException = assertThrows(
                IllegalArgumentException.class,
                () -> supplierService.createSupplier(supplierCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getMessage()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
    @Test
    void should_EmailRepeated_ThenReturn_Exception() {
        final String expectedMessage = "Email já cadastrado.";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestValid();
        when(supplierRepository.findByEmail(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValid()));
        final var actualException = assertThrows(
                IllegalArgumentException.class,
                () -> supplierService.createSupplier(supplierCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getMessage()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );*/
    }
}