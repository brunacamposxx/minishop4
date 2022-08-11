package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.service.SupplierService;
//import com.google.common.base.Supplier;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
        ResponseBase<SupplierProductResponse> retorno = supplierService.getById(id);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping(value = "minishop/supplier/listar")
    public ResponseEntity shortAll() {
        var retorno = supplierService.shortAll();
        return ResponseEntity.ok(retorno);
    }

    @PostMapping(value = "minishop/supplier")
    public ResponseEntity create(@Validated @RequestBody SupplierCreateRequest postModel){
        ResponseBase<SupplierResponse> retorno = supplierService.create(postModel);
        return ResponseEntity.ok(retorno);

    }
    @PutMapping(value = "minishop/supplier/{idSupplier}")
    public ResponseEntity<Supplier> updadeTarefa(@PathVariable Integer idSupplier, @RequestBody @Valid SupplierUpdateRequest supplierUpdateRequest){
        var supplier = supplierService.SupplierUpdate(idSupplier, supplierUpdateRequest);
        return ResponseEntity.ok(supplier);
    }
}
