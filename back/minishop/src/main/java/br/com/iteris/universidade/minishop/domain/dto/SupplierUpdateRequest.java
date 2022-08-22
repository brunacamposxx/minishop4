package br.com.iteris.universidade.minishop.domain.dto;

import lombok.Data;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class SupplierUpdateRequest {

    @NotEmpty(message = "É necessário informar o nome da empresa.")
    @Size(max = 100)
    private String nome;

    @NotEmpty(message = "É necessário informar a Cidade.")
    @Size(max = 100)
    private String cidade;

    //Obrigatório e que esteja entre as 27 siglas de estados brasileiros;
    @NotEmpty(message = "É necessário informar a UF.")
    @Size(max = 2)
    private String estado;

    @Email(message = "É necessário informar o Email.")
    @Size(max = 255)
    private String email;

    @Size(max = 15)
    private String telefone;

    @Size(max = 255)
    private String contato;
}
