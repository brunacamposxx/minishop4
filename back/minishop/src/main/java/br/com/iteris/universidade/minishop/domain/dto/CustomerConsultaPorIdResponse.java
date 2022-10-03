package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import lombok.Data;

import java.util.List;

@Data
public class CustomerConsultaPorIdResponse {
    private Integer id;
    private String firstName;
    private String lastName;
    private String cpf;
    private String email;
    private String phone;
    private List<CustomerOrderConsultaPorCustomerIdResponse> customerOrders;

    public CustomerConsultaPorIdResponse(Customer customer, List<CustomerOrderConsultaPorCustomerIdResponse> customerOrders) {
        this.id = customer.getId();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.cpf = customer.getCpf();
        this.email = customer.getEmail();
        this.phone = customer.getPhone();
        this.customerOrders = customerOrders;
    }

}
