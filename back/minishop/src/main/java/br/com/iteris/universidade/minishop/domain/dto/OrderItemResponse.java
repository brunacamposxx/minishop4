package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;

@Data
public class OrderItemResponse {
    private long Id;
    private Long ProductId;
    private double UnitPrice;
    private Integer Quantity;

    public OrderItemResponse(OrderItem orderItem) {
        Id = orderItem.getId();
        ProductId = orderItem.getProductId();
        UnitPrice = orderItem.getUnitPrice();
        Quantity = orderItem.getQuantity();
    }
}
