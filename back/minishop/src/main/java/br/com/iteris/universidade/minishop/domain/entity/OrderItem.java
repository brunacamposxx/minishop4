package br.com.iteris.universidade.minishop.domain.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "OrderItem")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "OrderId", insertable = false, updatable = false)
    private Long OrderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderId")
    private CustomerOrder customerOrder;

    @Column(name = "ProductId", insertable = false, updatable = false)
    private Long productId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productId")
    private Product product;

    @Column(name = "UnitPrice", columnDefinition = "decimal(12,2")
    private double unitPrice;

    @Column(name = "Quantity")
    private Integer quantity;
}