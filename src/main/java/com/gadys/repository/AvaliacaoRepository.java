package com.gadys.repository;

import com.gadys.gadys.model.entity.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {

    List<Avaliacao> findByLocalId(Long localId);

    Optional<Avaliacao> findByLocalIdAndUsuarioId(Long localId, Long usuarioId);

    void deleteByLocalIdAndUsuarioId(Long localId, Long usuarioId);

    // 👉 Aqui você adiciona o método que falta
    @Query("SELECT AVG(a.nota) FROM Avaliacao a WHERE a.local.id = :localId")
    Double findMediaByLocalId(Long localId);
}
