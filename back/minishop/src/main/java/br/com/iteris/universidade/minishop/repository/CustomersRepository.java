package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.Customer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomersRepository extends PagingAndSortingRepository<Customer, Integer> {
    Optional<Customer> findByEmailContaining(String email);

    Optional<Customer> findByCpfContaining(String cpf);
}
