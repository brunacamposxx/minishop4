package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.repository.CustomerOrdersRepository;
import br.com.iteris.universidade.minishop.repository.CustomersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomersRepository customersRepository;
    private final CustomerOrdersRepository customerOrdersRepository;

    // IMPLEMENTAR VALIDAÇÕES QUE SÃO PEDIDAS.

    //Criação
    public ResponseBase<CustomerResponse> cadastrar(CustomerCreateRequest novo) {

        // Cria uma entidade a partir do DTO
        Customer modeloDb = new Customer();
        modeloDb.setFirstName(novo.getFirstName());
        modeloDb.setLastName(novo.getLastName());
        modeloDb.setCpf(novo.getCPF());
        modeloDb.setEmail(novo.getEmail());
        modeloDb.setPhone(novo.getPhone());

        // Usa o repository para salvar o novo customer
        Customer customerSalvo = customersRepository.save(modeloDb);

        // Mapeia de entidade para dto
        CustomerResponse customerResponse = new CustomerResponse(customerSalvo);
        return new ResponseBase<>(customerResponse);
    }

    // Edição por id
    public CustomerResponse editar (int id, CustomerUpdateRequest customerUpdateRequest) {
        Optional<Customer> customerOptional = customersRepository.findById(id);

        Customer customer = customerOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));


        var customer1 = customerOptional.get();
        customer1.setFirstName(customerUpdateRequest.getFirstName());
        customer1.setLastName(customerUpdateRequest.getLastName());
        customer1.setCpf(customerUpdateRequest.getCPF());
        customer1.setEmail(customerUpdateRequest.getEmail());
        customer1.setPhone(customerUpdateRequest.getPhone());

        var customerAtualizado = customersRepository.save(customer1);

        return new CustomerResponse(
                customerAtualizado
        );
    }

    // Consulta por id consultado todos campos mais lista de ordens de compra (relacionamento tabela Customer com tabela CustomerOrder)
    public ResponseBase<CustomerConsultaPorIdResponse> pesquisaPorId(int id) {

        Customer customer = customersRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));

        List<CustomerOrder> customerOrders = customerOrdersRepository.findByCustomer(customer.getId());

        List<CustomerOrderConsultaPorCustomerIdResponse> customerOrderResponse = new ArrayList<>();

        for (CustomerOrder order : customerOrders) {
            customerOrderResponse.add(new CustomerOrderConsultaPorCustomerIdResponse(order));
        }

        // Mapeia de entidade para dto
        CustomerConsultaPorIdResponse customerConsultaPorIdResponse = new CustomerConsultaPorIdResponse(customer, customerOrderResponse);

        return new ResponseBase<>(customerConsultaPorIdResponse);
    }
    //CustomerOrderPorCustomerIdResponse

    // Listagem paginada consultando id, nome, telefone e email;
    public ResponseBase<Page<CustomerPesquisarPaginadoResponse>> pesquisarPaginado(PaginatedSearchRequest searchRequest) {

        // a Pagina atual não pode ser menor que 0
        if (searchRequest.getPaginaAtual() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O indice da página atual deve começar em 0");
        }
        // a quantidade de itens por pagina deve ser entre 1 e 50
        if (searchRequest.getQtdPorPagina() < 1 || searchRequest.getQtdPorPagina() > 50) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Quantidade de itens por página deve ser entre 1 e 50 itens");
        }

        // cria um objeto de consulta paginada(PageRequest) a partir dos parametros informados
        PageRequest pageRequest = PageRequest.of(searchRequest.getPaginaAtual(), searchRequest.getQtdPorPagina());
        // pesquisa no repositorio de customer usando a consulta paginada
        Page<Customer> customerPage = customersRepository.findAll(pageRequest);

        // Mapeia da entidade(Customer) para o DTO(CustomerResponse)
        Page<CustomerPesquisarPaginadoResponse> customerPesquisarPaginadoResponsePage = customerPage.map(CustomerPesquisarPaginadoResponse::new);
        return new ResponseBase<>(customerPesquisarPaginadoResponsePage);
    }
}
