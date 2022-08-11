package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product, Long> {
}
