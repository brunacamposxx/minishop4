package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import br.com.iteris.universidade.minishop.repository.SupplierRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRespository supplierRespository;


    //private final Su


    public ResponseBase<Page<SupplierResponse>> index(PaginatedSearchRequest searchRequest) {
        if (searchRequest.getPaginaAtual() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página atual deve ser deve começar em 0");
        }
        if (searchRequest.getQtdPorPagina() < 1 || searchRequest.getQtdPorPagina() > 50) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por pagina deve ser entre 1 e 50 itens");
        }


        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());

        Page<Supplier> supplierResponse = supplierRespository.findAll(pageRequest);


        Page<SupplierResponse> supplierResponsePage = supplierResponse.map(SupplierResponse::new);
        return new ResponseBase<>(supplierResponsePage);

    }

    public ResponseBase<SupplierResponse> create(SupplierCreateRequest novo){

        List<String> ufEstados = new ArrayList<>();
        //ufEstados.add("DF", "GO", );

        Supplier modeloDb = new Supplier();
        modeloDb.setNome(novo.getNome());
        modeloDb.setCNPJ(novo.getCNPJ());
        modeloDb.setCidade(novo.getCidade());
        modeloDb.setEstado(novo.getEstado());
        modeloDb.setEmail(novo.getEmail());
        modeloDb.setContato(novo.getContato());
        modeloDb.setTelefone(novo.getTelefone());

        Supplier supplierSalvo = supplierRespository.save(modeloDb);

        SupplierResponse supplierResponse = new SupplierResponse(supplierSalvo);

        return new ResponseBase<>(supplierResponse);

    }

    public ResponseBase<SupplierProductResponse> getById(Integer id) {
        Optional<Supplier> supplierOptional = supplierRespository.findById(id);
        ;
        Supplier supplier = supplierOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Supplier não enontrado !"));
        SupplierProductResponse supplierProductResponse = new SupplierProductResponse(supplier);
        return new ResponseBase<>(supplierProductResponse);
    }


    public List<SupplierShortResponse> shortAll() {

        List<SupplierShortResponse> listaRetorno = new ArrayList<>();

        var supplierFound = supplierRespository.findAll();
        supplierFound.forEach(supplier -> {
            listaRetorno.add(new SupplierShortResponse(
                    supplier.getId(), supplier.getNome()));
        });

        return listaRetorno;
    }

    public Supplier SupplierUpdate(Integer idSupplier, SupplierUpdateRequest supplierUpdateRequest){
        var supplierFound = supplierRespository.findById(idSupplier);
      /*  Optional<Supplier> supplierOptional = supplierRespository.findById(idSupplier);
        Supplier supplier = supplierOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Supplier não enontrado !"));
        */
        var supplier = supplierFound.get();

        supplier.setNome(supplierUpdateRequest.getNome());
        supplier.setCNPJ(supplierUpdateRequest.getCNPJ());
        supplier.setCidade(supplierUpdateRequest.getCidade());
        supplier.setEstado(supplierUpdateRequest.getEstado());
        supplier.setEmail(supplierUpdateRequest.getEmail());
        supplier.setTelefone(supplierUpdateRequest.getTelefone());
        supplier.setContato(supplierUpdateRequest.getContato());

        return supplierRespository.save(supplier);
    }

}

