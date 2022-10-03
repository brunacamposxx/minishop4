package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SupplierShortResponse {

    private Integer id;
    private String nome;

    public SupplierShortResponse(Supplier supplier) {
        this.id = supplier.getId();
        this.nome = supplier.getNome();
    }

}

