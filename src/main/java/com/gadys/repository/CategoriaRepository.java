package com.gadys.repository;

import com.gadys.gadys.model.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    // Spring Data JPA vai gerar automaticamente a query baseada no nome do atributo
    boolean existsByNome(String nome);
}