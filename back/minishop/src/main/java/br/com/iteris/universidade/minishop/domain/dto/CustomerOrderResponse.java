package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;

@Data
public class CustomerOrderResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;
    private Customer customer;

    public CustomerOrderResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getCustomerId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();
        customer = customerOrder.getCustomer();
    }
}
