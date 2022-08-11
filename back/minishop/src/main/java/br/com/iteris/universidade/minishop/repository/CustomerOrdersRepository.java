package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrdersRepository extends PagingAndSortingRepository<CustomerOrder, Integer> {
}
