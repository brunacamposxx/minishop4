<<<<<<< HEAD
//package br.com.iteris.universidade.minishop.intro.service;
//
//import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
//import br.com.iteris.universidade.minishop.domain.dto.SupplierCreateRequest;
//import br.com.iteris.universidade.minishop.domain.dto.SupplierResponse;
//import br.com.iteris.universidade.minishop.domain.entity.Supplier;
//
//import br.com.iteris.universidade.minishop.intro.fixture.SupplierFixture;
//import br.com.iteris.universidade.minishop.repository.SupplierRespository;
//import br.com.iteris.universidade.minishop.service.SupplierService;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.junit.jupiter.params.ParameterizedTest;
//import org.junit.jupiter.params.provider.ValueSource;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.*;
//
//@ExtendWith(MockitoExtension.class)
//public class SupplierServiceTest {
//    @Mock
//    private SupplierRespository supplierRepository;
//
//    @InjectMocks
//    private SupplierService supplierService;
//
//    @Test
//    void should_Create_ThenReturn_SupplierCreated() {
//        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();
//        final Supplier esperadoSupplier = SupplierFixture.supplierValido();
//
//        when(supplierRepository.save(any(Supplier.class))).thenReturn(esperadoSupplier);
//
//        final ResponseBase<SupplierResponse> actualResponseBase = supplierService.create(supplierCreateRequest);
//        final SupplierResponse atualSupplierResponse = actualResponseBase.getObjetoRetorno();
//
//        assertAll(
//                () -> assertNotNull(atualSupplierResponse.getId()),
//                () -> verify(supplierRepository, times(1)).save(any(Supplier.class)),
//                () -> assertEquals(esperadoSupplier.getId(), atualSupplierResponse.getId()),
//                () -> assertEquals(esperadoSupplier.getNome(), atualSupplierResponse.getNome()),
//                () -> assertEquals(esperadoSupplier.getCNPJ(), atualSupplierResponse.getCNPJ()),
//                () -> assertEquals(esperadoSupplier.getEmail(), atualSupplierResponse.getEmail()),
//                () -> assertEquals(esperadoSupplier.getCidade(), atualSupplierResponse.getCidade()),
//                () -> assertEquals(esperadoSupplier.getEstado(), atualSupplierResponse.getEstado()),
//                () -> assertEquals(esperadoSupplier.getContato(), atualSupplierResponse.getContato()),
//                () -> assertEquals(esperadoSupplier.getTelefone(), atualSupplierResponse.getTelefone())
//        );
//    }
//
//    @Test
//    void should_ExistedCNPJ_ThenReturn_Exception() {
//
//        final String expectedMessage = "O CNPJ já está cadastrado";
//
//        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();
//
//        when(supplierRepository.findByCNPJContaining(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValido()));
//
//        final var actualException = assertThrows(
//
//                ResponseStatusException.class,
//
//                () -> supplierService.create(supplierCreateRequest));
//
//        assertAll(
//
//                () -> assertEquals(expectedMessage, actualException.getReason()),
//
//                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
//
//                () -> verify(supplierRepository, never()).save(any(Supplier.class))
//
//        );
//
//    }
//    @ParameterizedTest
//    @ValueSource(strings = {"44444444444444", "1457245700", "14578AGR000185"})
//    void should_CNPJInvalid_ThenReturn_Exception(String input) {
//        final String expectedMessage = "CNPJ inválido";
//        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithCNPJ(input);
//
//
//        final var actualException = assertThrows(
//                ResponseStatusException.class,
//                () -> supplierService.create(supplierCreateRequest));
//
//        assertAll(
//                () -> assertEquals(expectedMessage, actualException.getReason()),
//                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
//                () -> verify(supplierRepository, never()).save(any(Supplier.class))
//        );
//    }
//    @Test
//    void should_ExistedEmail_ThenReturn_Exception() {
//
//        final String expectedMessage = "Este e-mail já está cadastrado";
//
//        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();
//
//        when(supplierRepository.findByEmailContaining(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValido()));
//
//        final var actualException = assertThrows(
//
//                ResponseStatusException.class,
//
//                () -> supplierService.create(supplierCreateRequest));
//
//        assertAll(
//
//                () -> assertEquals(expectedMessage, actualException.getReason()),
//
//                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
//
//                () -> verify(supplierRepository, never()).save(any(Supplier.class))
//
//        );
//
//    }
//    @ParameterizedTest
//    @ValueSource(strings = {"ghfghfghtr", "gfhgfhgfhty", "wesadagretopi"})
//    void should_EmailInvalid_ThenReturn_Exception(String input) {
//        final String expectedMessage = "E-mail inválido";
//        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithEmail(input);
//
//
//        final var actualException = assertThrows(
//                ResponseStatusException.class,
//                () -> supplierService.create(supplierCreateRequest));
//
//        assertAll(
//                () -> assertEquals(expectedMessage, actualException.getReason()),
//                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
//                () -> verify(supplierRepository, never()).save(any(Supplier.class))
//        );
//    }
//    @Test
//    void should_IDInvalid_ThenReturn_Exception(){
//        final String expectedMessage = "Supplier não encontrado!";
//
//        when(supplierRepository.findById(any())).thenReturn(Optional.empty());
//
//        final var actualException = assertThrows(
//                ResponseStatusException.class,
//                () -> supplierService.getById(-1));
//
//        assertAll(
//                () -> assertEquals(expectedMessage, actualException.getReason()),
//                () -> assertEquals(HttpStatus.NOT_FOUND, actualException.getStatus()),
//                () -> verify(supplierRepository, never()).save(any(Supplier.class))
//        );
//    }
//}
=======
package br.com.iteris.universidade.minishop.intro.Service;

import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.domain.dto.SupplierCreateRequest;
import br.com.iteris.universidade.minishop.domain.dto.SupplierResponse;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;

import br.com.iteris.universidade.minishop.intro.fixture.SupplierFixture;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import br.com.iteris.universidade.minishop.service.SupplierService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SupplierServiceTest {
    @Mock
    private SupplierRespository supplierRepository;

    @InjectMocks
    private SupplierService supplierService;

    @Test
    void should_Create_ThenReturn_SupplierCreated() {
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();
        final Supplier esperadoSupplier = SupplierFixture.supplierValido();

        when(supplierRepository.save(any(Supplier.class))).thenReturn(esperadoSupplier);

        final ResponseBase<SupplierResponse> actualResponseBase = supplierService.create(supplierCreateRequest);
        final SupplierResponse atualSupplierResponse = actualResponseBase.getObjetoRetorno();

        assertAll(
                () -> assertNotNull(atualSupplierResponse.getId()),
                () -> verify(supplierRepository, times(1)).save(any(Supplier.class)),
                () -> assertEquals(esperadoSupplier.getId(), atualSupplierResponse.getId()),
                () -> assertEquals(esperadoSupplier.getNome(), atualSupplierResponse.getNome()),
                () -> assertEquals(esperadoSupplier.getCNPJ(), atualSupplierResponse.getCNPJ()),
                () -> assertEquals(esperadoSupplier.getEmail(), atualSupplierResponse.getEmail()),
                () -> assertEquals(esperadoSupplier.getCidade(), atualSupplierResponse.getCidade()),
                () -> assertEquals(esperadoSupplier.getEstado(), atualSupplierResponse.getEstado()),
                () -> assertEquals(esperadoSupplier.getContato(), atualSupplierResponse.getContato()),
                () -> assertEquals(esperadoSupplier.getTelefone(), atualSupplierResponse.getTelefone())
        );
    }

    @Test
    void should_ExistedCNPJ_ThenReturn_Exception() {

        final String expectedMessage = "O CNPJ já está cadastrado";

        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();

        when(supplierRepository.findByCNPJContaining(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValido()));

        final var actualException = assertThrows(

                ResponseStatusException.class,

                () -> supplierService.create(supplierCreateRequest));

        assertAll(

                () -> assertEquals(expectedMessage, actualException.getReason()),

                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),

                () -> verify(supplierRepository, never()).save(any(Supplier.class))

        );

    }
    @ParameterizedTest
    @ValueSource(strings = {"44444444444444", "1457245700", "14578AGR000185"})
    void should_CNPJInvalid_ThenReturn_Exception(String input) {
        final String expectedMessage = "CNPJ inválido";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithCNPJ(input);


        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> supplierService.create(supplierCreateRequest));

        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
    @Test
    void should_ExistedEmail_ThenReturn_Exception() {

        final String expectedMessage = "Este e-mail já está cadastrado";

        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.supplierCreateValido();

        when(supplierRepository.findByEmailContaining(anyString())).thenReturn(Optional.of(SupplierFixture.supplierValido()));

        final var actualException = assertThrows(

                ResponseStatusException.class,

                () -> supplierService.create(supplierCreateRequest));

        assertAll(

                () -> assertEquals(expectedMessage, actualException.getReason()),

                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),

                () -> verify(supplierRepository, never()).save(any(Supplier.class))

        );

    }
    @ParameterizedTest
    @ValueSource(strings = {"ghfghfghtr", "gfhgfhgfhty", "wesadagretopi"})
    void should_EmailInvalid_ThenReturn_Exception(String input) {
        final String expectedMessage = "E-mail inválido";
        final SupplierCreateRequest supplierCreateRequest = SupplierFixture.createRequestWithEmail(input);


        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> supplierService.create(supplierCreateRequest));

        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
    @Test
    void should_IDInvalid_ThenReturn_Exception(){
        final String expectedMessage = "Supplier não encontrado!";

        when(supplierRepository.findById(any())).thenReturn(Optional.empty());

        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> supplierService.getById(-1));

        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.NOT_FOUND, actualException.getStatus()),
                () -> verify(supplierRepository, never()).save(any(Supplier.class))
        );
    }
}
>>>>>>> 6227280fa2476a9a9370c4f084ee99503c44a52e
