package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.CustomerOrder;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface CustomerOrdersRepository extends PagingAndSortingRepository<CustomerOrder, Integer> {

    @Query(value = "SELECT * FROM CustomerOrder c WHERE c.customerId = :customerId", nativeQuery = true)
    List<CustomerOrder> findByCustomer(@PathVariable("customerId") Integer customerId);
}
