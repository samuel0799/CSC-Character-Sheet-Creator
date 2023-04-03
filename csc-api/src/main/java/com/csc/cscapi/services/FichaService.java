package com.csc.cscapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csc.cscapi.entities.Ficha;
import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.repositories.FichaRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class FichaService {
    @Autowired
    private FichaRepository fichaRepository;
    private UsuarioService usuarioService;


    public List<Ficha> listarFichasPorUsuarioId(Long usuarioId) {
        return fichaRepository.findByUsuarioId(usuarioId);
    }

    public Ficha criaFicha(Ficha ficha) {
        Usuario usuario = usuarioService.buscar(ficha.getUsuario().getId());
        ficha.setUsuario(usuario);
        return fichaRepository.save(ficha);
    }
}
