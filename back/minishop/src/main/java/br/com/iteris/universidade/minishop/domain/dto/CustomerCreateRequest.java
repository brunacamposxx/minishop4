package br.com.iteris.universidade.minishop.domain.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Builder
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class CustomerCreateRequest {
    @NotEmpty(message = "Nome deve ser definido")
    @Size(max = 100)
    private String FirstName;
    @NotEmpty(message = "Sobrenome deve ser definido")
    @Size(max = 100)
    private String LastName;
    @NotEmpty(message = "CPF deve ser definido")
    @Size(max = 11)
    @org.hibernate.validator.constraints.br.CPF(message = "CPF inválido")
    private String CPF;
    @NotEmpty(message = "Email deve ser definido")
    @Size(max = 255)
    @javax.validation.constraints.Email(message = "Email inválido")
    private String Email;
    @Size(max = 15)
    private String Phone;
}
