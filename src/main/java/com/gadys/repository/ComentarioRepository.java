package com.gadys.repository;

import com.gadys.gadys.model.entity.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    List<Comentario> findByLocalId(Long localId);
    List<Comentario> findByUsuarioId(Long usuarioId);
}