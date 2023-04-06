package com.csc.cscapi.services;



import jakarta.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.exception.EmailExistenteException;
import com.csc.cscapi.exception.EntidadeNaoEncontradaException;
import com.csc.cscapi.model.input.LoginInput;
import com.csc.cscapi.model.input.UsuarioInput;
import com.csc.cscapi.model.output.UsuarioModel;
import com.csc.cscapi.repositories.UsuarioRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UsuarioService {

    private UsuarioRepository usuarioRepository;
  
    private ModelMapper modelMapper;


    public Usuario buscar(Long clienteId){
        return usuarioRepository.findById(clienteId)
        .orElseThrow(() -> new EntidadeNaoEncontradaException("Usuário não encontrado"));
    }

    @Transactional
    public Usuario salvar(Usuario usuario){
        boolean emailEmUso = usuarioRepository.findByEmail(usuario.getEmail())
                    .stream()
                 .anyMatch(clienteExistente->!clienteExistente.equals(usuario));
        if (emailEmUso) {
            throw new EmailExistenteException("Já existe um usuário cadastrado com esse email");
        }            
        return usuarioRepository.save(usuario);
    }

    public Usuario login(LoginInput loginInput){
        return usuarioRepository.findByEmailAndSenha(loginInput.getEmail(), loginInput.getSenha()).orElseThrow(() -> new EntidadeNaoEncontradaException("Usuario não encontrado"));
        }


    public UsuarioModel atualizar(Long id, UsuarioInput usuarioInput) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Usuário não encontrado"));
        modelMapper.map(usuarioInput, usuario);
        usuario = usuarioRepository.save(usuario);
        return modelMapper.map(usuario, UsuarioModel.class);
    }

    @Transactional
    public void deletar(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Usuário não encontrado"));
        usuarioRepository.delete(usuario);
    }

}
