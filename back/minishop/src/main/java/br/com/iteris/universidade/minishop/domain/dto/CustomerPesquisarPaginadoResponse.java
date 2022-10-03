package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import lombok.Data;

@Data
public class CustomerPesquisarPaginadoResponse {
    private Integer id;
    private String nome;
    private String phone;
    private String email;

    public CustomerPesquisarPaginadoResponse(Customer customer) {
        this.id = customer.getId();
        this.nome = customer.getFirstName() + " " + customer.getLastName();
        this.phone = customer.getPhone();
        this.email = customer.getEmail();
    }
}
