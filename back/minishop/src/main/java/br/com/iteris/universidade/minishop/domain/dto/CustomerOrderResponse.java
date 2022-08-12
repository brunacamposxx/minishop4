package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Data
public class CustomerOrderResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;
    private String FirstName;
    private String LastName;
    private int TotalQuantity;
    private List<OrderItem> Orders;

    public CustomerOrderResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();

        FirstName = customerOrder.getCustomer().getFirstName();
        LastName = customerOrder.getCustomer().getLastName();
        Orders = customerOrder.getOrderItems();
        TotalQuantity = quantitySet();
    }

    private int quantitySet() {
        int totalQuantity = 0;

        for(int i = 0; i < this.getOrders().size(); i++) {
            totalQuantity+= this.getOrders().get(i).getQuantity();
        }

        return totalQuantity;
    }
}
