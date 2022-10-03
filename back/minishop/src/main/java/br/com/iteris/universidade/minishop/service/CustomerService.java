package br.com.iteris.universidade.minishop.service;

import br.com.iteris.universidade.minishop.domain.dto.*;
import br.com.iteris.universidade.minishop.domain.entity.Customer;
import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import br.com.iteris.universidade.minishop.repository.CustomerOrdersRepository;
import br.com.iteris.universidade.minishop.repository.CustomersRepository;
import br.com.iteris.universidade.minishop.util.CpfValidator;
import br.com.iteris.universidade.minishop.util.EmailValidator;
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

    //Criação
    public ResponseBase<CustomerResponse> cadastrar(CustomerCreateRequest novo) {

        if (novo.getCPF() == null || !CpfValidator.isCPF(novo.getCPF())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF inválido");
        }
        if (!EmailValidator.isValid(novo.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail inválido");
        }
        var emailFound = customersRepository.findByEmailContaining(novo.getEmail());
        if (emailFound.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este e-mail já está cadastrado");
        }
        var cpfFound = customersRepository.findByCpfContaining(novo.getCPF());
        if (cpfFound.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O CPF já está cadastrado");
        }

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

    public ResponseBase<CustomerResponse> editar (int id, CustomerUpdateRequest customerUpdateRequest) {
        Optional<Customer> customerOptional = customersRepository.findById(id);

        Customer customer = customerOptional
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));

        var emailFound = customersRepository.findByEmailContaining(customerUpdateRequest.getEmail());
        if(emailFound.isPresent() && !customer.getEmail().equals(customerUpdateRequest.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este e-mail já está cadastrado");
        }

        customer.setFirstName(customerUpdateRequest.getFirstName());
        customer.setLastName(customerUpdateRequest.getLastName());
        customer.setEmail(customerUpdateRequest.getEmail());
        customer.setPhone(customerUpdateRequest.getPhone());

        var customerAtualizado = customersRepository.save(customer);

        return new ResponseBase<>( new CustomerResponse(customerAtualizado));
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
