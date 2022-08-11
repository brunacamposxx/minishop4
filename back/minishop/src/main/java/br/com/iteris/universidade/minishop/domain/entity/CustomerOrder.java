package br.com.iteris.universidade.minishop.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId", insertable = false, updatable = false)
    @JsonBackReference
    private Customer customer;

    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "orderId")
    @JsonManagedReference
    private List<OrderItem> orderItems;
}
