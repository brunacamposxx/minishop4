package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import lombok.Data;

import java.util.Date;

// usado no GetPorId do Customer que tem que retornar List<CustomerOrder>
@Data
public class CustomerOrderConsultaPorCustomerIdResponse {
    private int Id;
    private Date OrderDate;
    private double TotalAmount;

    public CustomerOrderConsultaPorCustomerIdResponse(CustomerOrder customerOrder) {
        Id = customerOrder.getId();
        OrderDate = customerOrder.getOrderDate();
        TotalAmount = customerOrder.getTotalAmount();
    }
}
