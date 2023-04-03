package com.csc.cscapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csc.cscapi.entities.Ficha;

@Repository
public interface FichaRepository extends JpaRepository<Ficha, Long> {
    List<Ficha> findByUsuarioId(Long usuarioId);
}
