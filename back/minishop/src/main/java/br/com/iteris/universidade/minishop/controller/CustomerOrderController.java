package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.service.CustomerOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/CustomerOrder")
public class CustomerOrderController {
    private final CustomerOrderService customerOrderService;

    @GetMapping("/")
    public ResponseEntity listar(PaginatedSearchRequest searchRequest) {
        ResponseBase<Page<CustomerOrderResponse>> retorno = customerOrderService.listar(searchRequest);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping("/{id}")
    public ResponseEntity pesquisarPorId(@PathVariable Integer id) {
        ResponseBase<CustomerOrderIdResponse> retorno = customerOrderService.pesquisarPorId(id);
        return ResponseEntity.ok(retorno);
    }
}
