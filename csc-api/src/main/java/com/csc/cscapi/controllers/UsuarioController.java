package com.csc.cscapi.controllers;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.model.input.UsuarioInput;
import com.csc.cscapi.model.output.UsuarioModel;
import com.csc.cscapi.repositories.UsuarioRepository;
import com.csc.cscapi.services.UsuarioService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private UsuarioRepository usuarioRepository;
    private UsuarioService usuarioService;
    @PostMapping("/cadastrar")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario cadastrarUsuario(@Valid @RequestBody Usuario usuario) {
        return usuarioService.salvar(usuario);
    }

    @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/{usuarioId}")
    public ResponseEntity<Usuario> buscar(@PathVariable Long usuarioId) {
        return usuarioRepository.findById(usuarioId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{usuarioId}")
    public UsuarioModel atualizarUsuario(@PathVariable Long usuarioId,@Valid @RequestBody UsuarioInput usuarioInput) {
     
        return usuarioService.atualizar(usuarioId, usuarioInput);
    }

    @DeleteMapping("/{usuarioId}")
    public ResponseEntity<Void> deletar(@PathVariable Long usuarioId) {
        usuarioService.deletar(usuarioId);
        return ResponseEntity.noContent().build();
    }
}
