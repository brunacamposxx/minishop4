package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class SupplierProductResponse {


    private Integer id;
    private String nome;
    private String CNPJ;
    private String cidade;
    private String estado;
    private String email;
    private String telefone;
    private String contato;
    private List<ProductResponse> products = new ArrayList<>();

    public SupplierProductResponse(Supplier supplier){
        this.id = supplier.getId();
        this.nome = supplier.getNome();
        this.CNPJ = supplier.getCNPJ();
        this.cidade = supplier.getCidade();
        this.estado = supplier.getEstado();
        this.email = supplier.getEmail();
        this.telefone = supplier.getTelefone();
        this.contato = supplier.getContato();
        this.products = supplier.getProducts().stream().map(x -> new ProductResponse(x)).collect(Collectors.toList());
    }

}
