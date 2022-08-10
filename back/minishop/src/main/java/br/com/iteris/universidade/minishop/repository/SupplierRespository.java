package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.Supplier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface SupplierRespository extends PagingAndSortingRepository<Supplier, Integer> {

    @Query(
            nativeQuery = true,
            value = "SELECT [Id],[CompanyName] FROM [minishop].[dbo].[Supplier]"
    )
    List<Supplier> listar();
}
