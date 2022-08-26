package br.com.iteris.universidade.minishop.repository;

import br.com.iteris.universidade.minishop.domain.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface ProductImageRepository extends JpaRepository<ProductImage, String> {
    Optional<ProductImage> findByURL(String url);

    //List<ProductImage> findAllByproductID(Integer ProductId);

}
