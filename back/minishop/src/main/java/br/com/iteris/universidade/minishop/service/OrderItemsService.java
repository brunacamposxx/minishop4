package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.OrderItemResponse;
import br.com.iteris.universidade.minishop.domain.dto.PaginatedSearchRequest;
import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import br.com.iteris.universidade.minishop.repository.OrderItemsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class OrderItemsService {
    private final OrderItemsRepository orderItemsRepository;

    public ResponseBase<Page<OrderItemResponse>> listar(PaginatedSearchRequest searchRequest) {
        if(searchRequest.getPaginaAtual() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página deve começar em 0");
        }

        if(searchRequest.getQtdPorPagina() < 1 || searchRequest.getQtdPorPagina() > 50) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por página deve ser entre 1 e 50 itens");
        }

        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());
        Page<OrderItem> paginatedResponse = orderItemsRepository.findAll(pageRequest);

        return new ResponseBase<>(paginatedResponse.map(OrderItemResponse::new));
    }
}
