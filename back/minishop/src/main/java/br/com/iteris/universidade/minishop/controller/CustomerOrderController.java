package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.CustomerOrderResponse;
import br.com.iteris.universidade.minishop.domain.dto.OrderItemResponse;
import br.com.iteris.universidade.minishop.domain.dto.PaginatedSearchRequest;
import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.service.CustomerOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
}
