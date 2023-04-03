package com.csc.cscapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csc.cscapi.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    
    Optional<Usuario> findByEmail(String email);
    
}
