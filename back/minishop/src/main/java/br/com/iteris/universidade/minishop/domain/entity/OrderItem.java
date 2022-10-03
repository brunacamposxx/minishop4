package br.com.iteris.universidade.minishop.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "OrderItem")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "OrderId", insertable = false, updatable = false)
    private Long orderId;

    @Column(name = "ProductId", insertable = false, updatable = false)
    private Long productId;

    @Column(name = "UnitPrice", columnDefinition = "decimal(12,2")
    private double unitPrice;

    @Column(name = "Quantity")
    private Integer quantity;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "orderId")
    @JsonBackReference
    private CustomerOrder customerOrder;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "productId", insertable = false, updatable = false)
    @JsonBackReference
    private Product product;
}