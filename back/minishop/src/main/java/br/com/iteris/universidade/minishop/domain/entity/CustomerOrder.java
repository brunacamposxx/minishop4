package br.com.iteris.universidade.minishop.domain.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "CustomerOrder")
public class CustomerOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "OrderDate")
    private Date orderDate;

    @Column(name = "TotalAmount", columnDefinition = "decimal(12, 2)")
    private double totalAmount;

    @Column(name = "CustomerId", insertable = false, updatable = false)
    private Integer customerId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CustomerId")
    private Customer customer;

    @Column(name = "OrderId", insertable = false, updatable = false)
    private Integer orderId;
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderId")
    private OrderItem orderItem;

}
