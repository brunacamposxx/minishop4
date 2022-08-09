package br.com.iteris.universidade.minishop.domain.entity;

import lombok.Data;
import org.hibernate.validator.constraints.UniqueElements;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.List;


@Data
@Entity
@Table(name = "Supplier")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name= "CompanyName", length = 100, nullable = false)
    private String nome;

    @CNPJ
    @Column(name = "CNPJ", unique = true, nullable = false)
    private String CNPJ;

    @Column(name = "City", length = 100, nullable = false)
    private String cidade;

    @Column(name = "UF")
//  Obrigatório e que esteja entre as 27 siglas de estados brasileiros;
    private String estado;

    @Email
   // @UniqueElements
    @Column(name = "Email", unique = true, nullable = false)
    private String email;

    @Column(name = "Phone", length = 15)
    private String telefone;

    @Column(name = "ContactName")
    private String contato;

    //@OneToMany(mappedBy = "supplierId", fetch = FetchType.LAZY)
    //private List<Product> products;


}
