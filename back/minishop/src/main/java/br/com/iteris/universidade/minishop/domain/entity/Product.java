package br.com.iteris.universidade.minishop.domain.entity;

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

    @OneToMany(mappedBy = "productId", fetch = FetchType.LAZY)
    private List<OrderItem> orderItems;
}
