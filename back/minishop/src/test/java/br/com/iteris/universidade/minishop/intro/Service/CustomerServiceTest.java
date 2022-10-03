package br.com.iteris.universidade.minishop.intro.Service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.intro.fixture.CustomerFixture;
import br.com.iteris.universidade.minishop.repository.CustomersRepository;
import br.com.iteris.universidade.minishop.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.mockito.ArgumentMatchers.any;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;


import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class CustomerServiceTest {
    @Mock
    private CustomersRepository customersRepository;

    @InjectMocks
    private CustomerService customerService;

    private Customer customer;

    @Test
    void should_SearchPaginated_Then_ReturnValidCustomer() {
        Pageable page = PageRequest.of(0, 10);
        PaginatedSearchRequest pages = new PaginatedSearchRequest();
        pages.setPaginaAtual(0);
        pages.setQtdPorPagina(10);

        List<Customer> customerList = Arrays.asList(customer, customer);
        Page<Customer> customerPage = new PageImpl<>(customerList);
        when(customersRepository.findAll(page)).thenReturn(customerPage);
        var customer = customerService.pesquisarPaginado(pages);

        verify(customersRepository).findAll(page);
        assertTrue(customer.isSucesso());
        // como retornar aqui a quantidade de customers igual a 10?
    }

    @ParameterizedTest
    @CsvSource(value = {"-1;50", "0;51", "1;-1"}, delimiter = ';')
    void should_SearchPaginated_Then_ReturnException(Integer pagina, Integer qtdPagina) {
        Pageable page = PageRequest.of(0, 10);
        PaginatedSearchRequest pages = new PaginatedSearchRequest();
        pages.setPaginaAtual(0);
        pages.setQtdPorPagina(10);

        PaginatedSearchRequest badRequest = new PaginatedSearchRequest();
        badRequest.setPaginaAtual(pagina);
        badRequest.setQtdPorPagina(qtdPagina);

        List<Customer> customerList = Arrays.asList(customer, customer);
        Page<Customer> customerPage = new PageImpl<>(customerList);
        when(customersRepository.findAll(page)).thenReturn(customerPage);
        var customer = customerService.pesquisarPaginado(pages);

        assertThrows(ResponseStatusException.class, () -> customerService.pesquisarPaginado(badRequest));
    }

//    @Test
//    void shouldSearchByIdThenReturnOrderValid() {
//        Optional<Customer> optional = Optional.of(customer);
//        when(customersRepository.findById(any())).thenReturn(optional);
//        var customer = customerService.pesquisaPorId(1);
//
//        verify(customersRepository).findById(1);
//        assertTrue(customer.isSucesso());
//        assertEquals("John", customer.getObjetoRetorno().getFirstName());
//    }
//
//    @Test
//    void shouldSearchByIdInvalidThenReturnException() {
//
//        Optional<Customer> optional = Optional.of(customer);
//        when(customersRepository.findById(2)).thenReturn(optional);
//        var customer = customerService.pesquisaPorId(2);
//
//        assertThrows(ResponseStatusException.class, () -> customerService.pesquisaPorId(3));
//    }

    @Test
    void should_UpdateCustomer_Then_ReturnUpdatedCustomer() {
        final CustomerUpdateRequest customerUpdateRequest = CustomerFixture.customerUpdateRequestValid();
        final Customer initialCustomer = CustomerFixture.customerValid();
        final Customer expectedCustomer = CustomerFixture.validCustomerUpdate(customerUpdateRequest);
        when(customersRepository.findById(initialCustomer.getId()))
                .thenReturn(Optional.of(initialCustomer));
        when(customersRepository.save(any(Customer.class)))
                .thenReturn(expectedCustomer);
        CustomerResponse customerCreateResponse = customerService
                .editar(initialCustomer.getId(), customerUpdateRequest).getObjetoRetorno();
        assertAll(
                () -> assertEquals(customerUpdateRequest.getFirstName(), customerCreateResponse.getFirstName()),
                () -> assertEquals(customerUpdateRequest.getLastName(), customerCreateResponse.getLastName()),
                () -> assertEquals(customerUpdateRequest.getEmail(), customerCreateResponse.getEmail()),
                () -> assertEquals(customerUpdateRequest.getPhone(), customerCreateResponse.getPhone()),
                () -> verify(customersRepository, times(1)).findById(initialCustomer.getId()),
                () -> verify(customersRepository, times(1)).save(any(Customer.class))
        );
    }

    @Test
    void should_UpdateByInvalidId_Then_ReturnException() {
        final String expectedMessage = "Cliente não encontrado";
        final CustomerUpdateRequest customerUpdateRequest = CustomerFixture.customerUpdateRequestValid();
        final Customer initialCustomer = CustomerFixture.customerValidWithId(5);
        when(customersRepository.findById(initialCustomer.getId()))
                .thenReturn(Optional.empty());

        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> customerService.editar(5, customerUpdateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.NOT_FOUND, actualException.getStatus()),

                () -> verify(customersRepository, times(1)).findById(initialCustomer.getId())
        );
    }

    @Test
    void should_CreateCustomer_Then_ReturnSuccess() {

        final CustomerCreateRequest customerCreateRequest = CustomerFixture.createRequestValid();
        final Customer expectedCustomer = CustomerFixture.customerValid();
        when(customersRepository.save(any(Customer.class))).thenReturn(expectedCustomer);
        final ResponseBase<CustomerResponse> actualResponseBase = customerService.cadastrar(customerCreateRequest);
        final CustomerResponse actualCustomerResponse = actualResponseBase.getObjetoRetorno();
        assertAll(
                () -> assertNotNull(actualCustomerResponse.getId()),
                () -> verify(customersRepository).save(any(Customer.class)),
                () -> assertEquals(expectedCustomer.getCpf(), actualCustomerResponse.getCpf())
        );
    }

    @ParameterizedTest
    @ValueSource(strings = {"11111111111", "13337716512", "1333771BR12", "133377165"})
    void should_CreateCustomerWithInvalidCPF_Then_ReturnException(String input) {
        final String expectedMessage = "CPF inválido";
        final CustomerCreateRequest customerCreateRequest = CustomerFixture.createRequestWithCPF(input);
        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> customerService.cadastrar(customerCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
                () -> verify(customersRepository, never()).save(any(Customer.class))
        );
    }

    @Test
    void should_CreateCustomerWithCPFAlreadyRegistered_Then_ReturnException() {
        final String expectedMessage = "O CPF já está cadastrado";
        final CustomerCreateRequest customerCreateRequest = CustomerFixture.createRequestValid();
        when(customersRepository.findByCpfContaining(anyString())).thenReturn(Optional.of(CustomerFixture.customerValid()));
        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> customerService.cadastrar(customerCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
                () -> verify(customersRepository, never()).save(any(Customer.class))
        );
    }

    @Test
    void should_CreateCustomerWithEmailAlreadyRegistered_Then_ReturnException() {
        final String expectedMessage = "Este e-mail já está cadastrado";
        final CustomerCreateRequest customerCreateRequest = CustomerFixture.createRequestValid();
        when(customersRepository.findByEmailContaining(anyString())).thenReturn(Optional.of(CustomerFixture.customerValid()));
        final var actualException = assertThrows(
                ResponseStatusException.class,
                () -> customerService.cadastrar(customerCreateRequest));
        assertAll(
                () -> assertEquals(expectedMessage, actualException.getReason()),
                () -> assertEquals(HttpStatus.BAD_REQUEST, actualException.getStatus()),
                () -> verify(customersRepository, never()).save(any(Customer.class))
        );
    }




    @BeforeEach
    private void customer() {
        this.customer = new Customer();
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setEmail("johndoe@gmail.com");
        customer.setPhone("11999999999");
        customer.setCpf("71836545088");

        CustomerOrder customerOrder = new CustomerOrder();
        customerOrder.setOrderDate(null);
        customerOrder.setTotalAmount(22087.31);

//        customer.setOrders(List.of(customerOrder));

        Product product = new Product();
        product.setProductName("Banana");

        OrderItem orderItem = new OrderItem();
        orderItem.setId(2L);
        orderItem.setQuantity(300);
        orderItem.setProduct(product);

        customerOrder.setOrderItems(List.of(orderItem));

    }



}
