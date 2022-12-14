package br.com.iteris.universidade.minishop.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "ProductImage")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "URL", nullable = false)
    @Size(max = 2080, message = "o tamanho máximo da URL é de 2080 caracteres")
    private String URL;

    @Column(name = "Sequency", nullable = false)
    private Integer sequencia = 0;


    @Column(name = "ProductID", nullable = false, insertable = false, updatable = false)
    private Integer productID;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "productID")
    @JsonBackReference
    private Product product;

}
