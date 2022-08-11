package br.com.iteris.universidade.minishop.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ProductName", length = 100, nullable = false)
    private String productName;

    @Column(name = "SupplierId", nullable = false)
    private Integer supplierId;

    @Column(name = "UnitPrice", columnDefinition = "decimal(12,2)")
    private double unitPrice;

    @Column(name = "IsDiscontinued")
    private Boolean isDiscontinued;

    @Column(name = "PackageName", length = 100)
    private String packageName;

    /*@ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "supplierId", nullable = false)
    @JsonBackReference
    private Supplier supplier;*/
}
