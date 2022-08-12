package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CustomerOrderIdResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;

    private Customer customer;
    private List<OrderItem> Orders;

    public CustomerOrderIdResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getCustomerId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();
        customer = customerOrder.getCustomer();
        Orders = customerOrder.getOrderItems();
    }
}
