package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CustomerOrderIdResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;
    private Customer customer;
    private List<OrderItemIdResponse> Orders = new ArrayList<>();

    public CustomerOrderIdResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getCustomerId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();
        customer = customerOrder.getCustomer();
        Orders = customerOrder.getOrderItems().stream().map(x -> new OrderItemIdResponse(x)).collect(Collectors.toList());
    }
}
