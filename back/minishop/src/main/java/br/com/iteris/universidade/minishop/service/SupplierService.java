package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.ResponseBase;
import br.com.iteris.universidade.minishop.domain.dto.SupplierResponse;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import br.com.iteris.universidade.minishop.domain.DTO.PaginatedSearchRequest;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRespository supplierRespository;


    public ResponseBase<Page<SupplierResponse>> index(PaginatedSearchRequest searchRequest){
        if(searchRequest.getPaginaAtual() < 0){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página atual deve ser deve começar em 0");
        }
        if(searchRequest.getQtdPorPagina()<1 || searchRequest.getQtdPorPagina() > 50){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por pagina deve ser entre 1 e 50 itens");
        }


        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());

        Page<Supplier> supplierResponse = supplierRespository.findAll(pageRequest);


        Page<SupplierResponse> supplierResponsePage = supplierResponse.map(SupplierResponse::new);
        return new ResponseBase<>(supplierResponsePage);

    }

    public ResponseBase<SupplierResponse> getById(Integer id){
        Optional<Supplier> supplierOptional = supplierRespository.findById(id); ;
        Supplier supplier = supplierOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Supplier não enontrado !"));
        SupplierResponse supplierResponse = new SupplierResponse(supplier);
        return new ResponseBase<>(supplierResponse);
    }
}

