package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import lombok.Data;

@Data
public class CustomerResponse {
    private Integer id;
    private String firstName;
    private String lastName;
    private String cpf;
    private String email;
    private String phone;

    public CustomerResponse(Customer customer) {
        this.id = customer.getId();
        this.firstName = customer.getFirstName();
        this.lastName = customer.getLastName();
        this.cpf = customer.getCpf();
        this.email = customer.getEmail();
        this.phone = customer.getPhone();
    }


}
