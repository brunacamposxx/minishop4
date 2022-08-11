package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.OrderItemIdResponse;
import br.com.iteris.universidade.minishop.domain.dto.OrderItemResponse;
import br.com.iteris.universidade.minishop.domain.dto.PaginatedSearchRequest;
import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.service.OrderItemsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/OrderItems")
public class OrderItemController {
    private final OrderItemsService orderItemsService;

    @GetMapping("/")
    public ResponseEntity listar(PaginatedSearchRequest searchRequest) {
        ResponseBase<Page<OrderItemResponse>> retorno = orderItemsService.listar(searchRequest);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping("/{id}")
    public ResponseEntity listarPorId(@PathVariable Long id) {
        ResponseBase<OrderItemIdResponse> retorno = orderItemsService.pesquisarPorId(id);
        return ResponseEntity.ok(retorno);
    }
}
