package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

// usado no GetPorId do Customer que tem que retornar List<CustomerOrder>
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerOrderConsultaPorCustomerIdResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;
    private List<OrderItemIdResponse> Orders;


    public CustomerOrderConsultaPorCustomerIdResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();
        Orders = customerOrder.getOrderItems().stream().map(x -> new OrderItemIdResponse(x)).collect(Collectors.toList());
    }
}
