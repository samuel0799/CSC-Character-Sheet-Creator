package com.csc.cscapi.domain.services;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.csc.cscapi.domain.model.Usuario;
import com.csc.cscapi.domain.repository.UsuarioRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UsuarioService {

    private UsuarioRepository usuarioRepository;

    @Transactional
    public Usuario salvar(Usuario usuario){
        boolean emailEmUso = usuarioRepository.findByEmail(usuario.getEmail())
                    .stream()
                 .anyMatch(clienteExistente->!clienteExistente.equals(usuario));
        if (emailEmUso) {
            throw new RuntimeException("Já existe um cliente cadastrado com esse email");
        }            
        return usuarioRepository.save(usuario);
    }
}
