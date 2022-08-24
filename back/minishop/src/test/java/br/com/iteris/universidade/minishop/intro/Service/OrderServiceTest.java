package br.com.iteris.universidade.minishop.intro.Service;


import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.repository.OrderItemsRepository;
import br.com.iteris.universidade.minishop.service.OrderItemsService;
import br.com.iteris.universidade.minishop.domain.dto.PaginatedSearchRequest;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import br.com.iteris.universidade.minishop.domain.entity.Product;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;



@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {

    @Mock
    private OrderItemsRepository orderRepository;

    @InjectMocks
    private OrderItemsService orderService;

    private CustomerOrder customerOrder;

    private OrderItem orderItem;

    @Test
    void should_SearchById_Then_ReturnOrder() {

        Optional<OrderItem> optional = Optional.of(orderItem);
        when(orderRepository.findById(2L)).thenReturn(Optional.empty());
//        when(orderRepository.findById(any())).thenReturn(optional);
        var order = orderService.pesquisarPorId(2L);

        verify(orderRepository).findById(2L);
        assertTrue(order.isSucesso());
        assertEquals("Banana", order.getObjetoRetorno().getProductName());

    }

    @BeforeEach
    private void orderItem() {
        Product product = new Product();
        product.setProductName("Banana");

        this.orderItem = new OrderItem();
        orderItem.setId(2L);
        orderItem.setQuantity(300);
        orderItem.setProduct(product);
        orderItem.setUnitPrice(10.00);

    }

}
