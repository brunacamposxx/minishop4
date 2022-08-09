package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SupplierRespository extends PagingAndSortingRepository<Supplier, Integer> {

}
