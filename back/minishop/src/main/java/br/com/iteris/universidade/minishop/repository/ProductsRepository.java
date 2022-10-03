package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product, Long> {

    @Query(
            nativeQuery = true,
            value = "SELECT URL FROM ProductImage ORDER BY Sequency"
    )
    List<String> listagemSequency();
}
