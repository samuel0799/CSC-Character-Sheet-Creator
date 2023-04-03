package com.csc.cscapi.services;



import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.repositories.UsuarioRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UsuarioService {

    private UsuarioRepository usuarioRepository;


    public Usuario buscar(Long clienteId){
        return usuarioRepository.findById(clienteId)
        .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
    }

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
