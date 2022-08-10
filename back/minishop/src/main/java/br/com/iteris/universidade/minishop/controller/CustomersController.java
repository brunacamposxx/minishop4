package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController()
@RequiredArgsConstructor
public class CustomersController {

    private final CustomerService customerService;

    @PostMapping("api/costumers")
    public ResponseEntity cadastrar(@Valid @RequestBody CustomerCreateRequest postModel) {

        ResponseBase<CustomerResponse> retorno = customerService.cadastrar(postModel);

        return ResponseEntity.ok(retorno);
    }

    @PutMapping("api/costumers/{id}")
    public ResponseEntity<CustomerResponse> editar(
            @PathVariable int id,
            @RequestBody @Valid CustomerUpdateRequest customerUpdateRequest) {
        var customer = customerService.editar(id, customerUpdateRequest);
        return ResponseEntity.ok(customer);
    }

    @GetMapping("api/costumers/{id}")
    public ResponseEntity pesquisaPorId(@PathVariable int id) {

        ResponseBase<CustomerResponse> retorno = customerService.pesquisaPorId(id);

        return ResponseEntity.ok(retorno);
    }

    @GetMapping("api/costumers")
    public ResponseEntity pesquisarPaginado(PaginatedSearchRequest searchRequest) {

        ResponseBase<Page<CustomerPesquisarPaginadoResponse>> retorno = customerService.pesquisarPaginado(searchRequest);

        return ResponseEntity.ok(retorno);
    }
}