package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.DTO.PaginatedSearchRequest;
import br.com.iteris.universidade.minishop.domain.DTO.ResponseBase;
import br.com.iteris.universidade.minishop.domain.DTO.SupplierResponse;
import br.com.iteris.universidade.minishop.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequiredArgsConstructor
public class SupplierController {
    private final SupplierService supplierService;

    @GetMapping("minishop/supplier")
    public ResponseEntity get(PaginatedSearchRequest searchRequest) {
        ResponseBase<Page<SupplierResponse>> retorno = supplierService.index(searchRequest);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping(value = "minishop/supplier/{id}")
    public ResponseEntity getById(@PathVariable Integer id){
        ResponseBase<SupplierResponse> retorno = supplierService.getById(id);
        return ResponseEntity.ok(retorno);
    }
}
