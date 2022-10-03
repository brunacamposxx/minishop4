package br.com.iteris.universidade.minishop.intro.fixture;

import br.com.iteris.universidade.minishop.domain.dto.CustomerCreateRequest;
import br.com.iteris.universidade.minishop.domain.dto.CustomerUpdateRequest;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
import java.util.Arrays;

@UtilityClass
public class CustomerFixture {
    public static Customer customerValid() {
        return Customer.builder()
                .Id(3)
                .firstName("John")
                .lastName("Doe")
                .cpf("71836545088")
                .email("johndoe@gmail.com")
                .phone("11999999999")
                .build();
    }

    public static Customer validCustomerUpdate(CustomerUpdateRequest body) {
        return Customer.builder()
                .Id(1)
                .firstName("John")
                .lastName("Doe")
                .email("johndoeupdated@gmail.com")
                .phone("11999999999")
                .build();
    }

    public static CustomerUpdateRequest customerUpdateRequestValid() {
        return CustomerUpdateRequest.builder()
                .FirstName("John")
                .LastName("Doe")
                .Email("johndoeupdated@gmail.com")
                .Phone("11999999999")
                .build();
    }


    public static Customer customerValidWithId(int id) {
        return Customer.builder()
                .Id(id)
                .firstName("Ana")
                .lastName("Martins")
                .cpf("13011009600")
                .email("anamartins@hotmail.com")
                .phone("37991293448")
                .build();
    }

    public static CustomerCreateRequest createRequestValid() {
        return CustomerCreateRequest.builder()
                .FirstName("Ana")
                .LastName("Martins")
                .CPF("13011009600")
                .Email("anamartins@hotmail.com")
                .Phone("37991293448")
                .build();
    }

    public static CustomerCreateRequest createRequestWithCPF(String input) {
        return CustomerCreateRequest.builder()
                .FirstName("Ana")
                .LastName("Martins")
                .CPF(input)
                .Email("anamartins@hotmail.com")
                .Phone("37991293448")
                .build();
    }


//    public static Customer customerWithCustomerOrderValid() {
//        Customer customer = CustomerFixture.customerValid();
//        customer.setOrders(new ArrayList<>(Arrays.asList(CustomerOrderFixture.customerOrderValid())));
//        return customer;
//    }
}