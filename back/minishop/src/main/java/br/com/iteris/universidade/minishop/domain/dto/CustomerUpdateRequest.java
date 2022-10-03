package br.com.iteris.universidade.minishop.domain.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;

import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class CustomerUpdateRequest {
    @NotEmpty(message = "Nome deve ser definido")
    @Size(max = 100)
    private String FirstName;
    @NotEmpty(message = "Sobrenome deve ser definido")
    @Size(max = 100)
    private String LastName;
    @NotEmpty(message = "Email deve ser definido")
    @Size(max = 255)
    @javax.validation.constraints.Email(message = "Email inválido")
    private String Email;
    @Size(max = 15)
    private String Phone;

}
