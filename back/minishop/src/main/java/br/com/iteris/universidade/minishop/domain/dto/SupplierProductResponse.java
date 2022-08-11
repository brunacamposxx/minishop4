package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import lombok.Data;

import java.util.List;

@Data
public class SupplierProductResponse {


    private Integer id;
    private String nome;
    //private String CNPJ;
    private String cidade;
    private String estado;
    private String email;
    private String telefone;
    private String contato;
    private List<Product> listaDeProdutos;

    public SupplierProductResponse(Supplier supplier){
        this.id = supplier.getId();
        this.nome = supplier.getNome();
        //this.CNPJ = supplier.getCNPJ();
        this.cidade = supplier.getCidade();
        this.estado = supplier.getEstado();
        this.email = supplier.getEmail();
        this.telefone = supplier.getTelefone();
        this.contato = supplier.getContato();
        this.listaDeProdutos = supplier.getProducts();
    }

}
