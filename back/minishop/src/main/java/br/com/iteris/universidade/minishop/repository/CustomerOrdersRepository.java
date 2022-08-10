package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrdersRepository extends CrudRepository<CustomerOrder, Integer> {
}
