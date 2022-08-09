package br.com.iteris.universidade.minishop.domain.DTO;

import lombok.Data;

@Data
public class PaginatedSearchRequest {
    private Integer PaginaAtual;
    private Integer QtdPorPagina;
}
