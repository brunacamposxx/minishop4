package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;
import java.util.Date;
import java.util.List;

@Data
public class CustomerOrderResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;
    private String FirstName;
    private String LastName;
    private List<OrderItem> Orders;

    public CustomerOrderResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();

        FirstName = customerOrder.getCustomer().getFirstName();
        LastName = customerOrder.getCustomer().getLastName();
        Orders = customerOrder.getOrderItems();
    }
}
