package br.com.iteris.universidade.minishop.controller;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/products")
public class ProductsController {
    private final ProductsService productsService;

    @GetMapping("/")
    public ResponseEntity pesquisar(SearchProductsRequest searchRequest) {
        ResponseBase<Page<ProductResponse>> retorno = productsService.pesquisar(searchRequest);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping("/{id}")
    public ResponseEntity pesquisarPorId(@PathVariable Long id) {
        ResponseBase<ProductResponseFull> retorno = productsService.pesquisarPorId(id);
        return ResponseEntity.ok(retorno);
    }

    @PutMapping("/{id}")
    public ResponseEntity atualizarPorId(@PathVariable Long id, @RequestBody @Valid ProductUpdateRequest productUpdateRequest) {
        ResponseBase<ProductResponse> retorno = productsService.editarPorId(id, productUpdateRequest);
        return ResponseEntity.ok(retorno);
    }

    @PostMapping("/")
    public ResponseEntity cadastrar(@Valid @RequestBody ProductCreateRequest postModel) {
        ResponseBase<ProductResponse> retorno = productsService.cadastrar(postModel);
        return ResponseEntity.ok(retorno);
    }
}
