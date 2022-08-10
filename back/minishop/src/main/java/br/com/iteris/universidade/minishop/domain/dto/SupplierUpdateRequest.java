package br.com.iteris.universidade.minishop.domain.dto;

import lombok.Data;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class SupplierUpdateRequest {
    @NotEmpty
    @Size(max = 100)
    private String nome;

    @CNPJ
    @NotEmpty
    private String CNPJ;

    @NotEmpty
    @Size(max = 100)
    private String Cidade;

    //Obrigatório e que esteja entre as 27 siglas de estados brasileiros;
    @NotEmpty
    @Size(max = 2)
    private String Estado;

    @Email
    @Size(max = 255)
    private String Email;

    @Size(max = 15)
    private String Telefone;

    @Size(max = 255)
    private String Contato;
}
