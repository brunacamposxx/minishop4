package br.com.iteris.universidade.minishop.domain.DTO;

import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import lombok.Data;
import org.hibernate.validator.constraints.br.CNPJ;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.Column;
import javax.validation.constraints.Email;

@Data
public class SupplierResponse {

    private Integer id;
    private String nome;
    private String CNPJ;
    private String cidade;
    private String estado;
    private String email;
    private String telefone;
    private String contato;

    public SupplierResponse(Supplier supplier){
        this.id = supplier.getId();
        this.nome = supplier.getNome();
        this.CNPJ = supplier.getCNPJ();
        this.cidade = supplier.getCidade();
        this.estado = supplier.getEstado();
        this.email = supplier.getEmail();
        this.telefone = supplier.getTelefone();
        this.contato = supplier.getContato();
    }

}
