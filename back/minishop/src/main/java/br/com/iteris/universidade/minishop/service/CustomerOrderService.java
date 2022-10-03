package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.domain.entity.OrderItem;
import br.com.iteris.universidade.minishop.repository.CustomerOrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerOrderService {
    private final CustomerOrdersRepository customerOrdersRepository;

    public ResponseBase<Page<CustomerOrderResponse>> listar(PaginatedSearchRequest searchRequest) {
        if(searchRequest.getPaginaAtual() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página deve começar em 0");
        }

        if(searchRequest.getQtdPorPagina() < 1 || searchRequest.getQtdPorPagina() > 50) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por página deve ser entre 1 e 50 itens");
        }

        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());
        Page<CustomerOrder> paginatedResponse = customerOrdersRepository.findAll(pageRequest);

        return new ResponseBase<>(paginatedResponse.map(CustomerOrderResponse::new));
    }

    public ResponseBase<CustomerOrderIdResponse> pesquisarPorId(int id) {
        Optional<CustomerOrder> customerOrderOptional = customerOrdersRepository.findById(id);

        CustomerOrder customerOrder = customerOrderOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pedido não encontrado!"));

        CustomerOrderIdResponse customerOrderIdResponse = new CustomerOrderIdResponse((customerOrder));

        return new ResponseBase<>(customerOrderIdResponse);
    }
}
