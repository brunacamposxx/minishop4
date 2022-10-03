package br.com.iteris.universidade.minishop.domain.dto;

import lombok.Data;

@Data
public class PaginatedSearchRequest {
    private Integer PaginaAtual;
    private Integer QtdPorPagina;
}
