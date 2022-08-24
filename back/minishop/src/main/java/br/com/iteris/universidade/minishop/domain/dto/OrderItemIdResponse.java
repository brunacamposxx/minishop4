package br.com.iteris.universidade.minishop.domain.dto;

import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import lombok.Data;

@Data
public class OrderItemIdResponse {
    private long Id;
    private Long ProductId;
    private String ProductName;
    private double UnitPrice;
    private Integer Quantity;

    public OrderItemIdResponse(OrderItem orderItem) {
        Id = orderItem.getId();
        ProductId = orderItem.getProductId();
        UnitPrice = orderItem.getUnitPrice();
        Quantity = orderItem.getQuantity();
        ProductName = orderItem.getProduct().getProductName();
    }
}
