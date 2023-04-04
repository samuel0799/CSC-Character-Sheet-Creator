package com.csc.cscapi.services;

import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csc.cscapi.entities.Ficha;
import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.exception.EntidadeNaoEncontradaException;
import com.csc.cscapi.model.input.FichaInput;
import com.csc.cscapi.model.output.FichaModel;
import com.csc.cscapi.repositories.FichaRepository;
import com.csc.cscapi.repositories.UsuarioRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class FichaService {
    @Autowired
    private FichaRepository fichaRepository;
    private UsuarioService usuarioService;
    private ModelMapper modelMapper;
    private UsuarioRepository usuarioRepository;


    public Ficha criaFicha(Ficha ficha) {
        Usuario usuario = usuarioService.buscar(ficha.getUsuario().getId());
        ficha.setUsuario(usuario);
        
        return fichaRepository.save(ficha);
    }

    public FichaModel buscarPorId(Long id) {
        Ficha ficha = fichaRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Ficha não encontrada"));
        return modelMapper.map(ficha, FichaModel.class);
    }

    public FichaModel atualizar(Long idUsuario, Long idFicha, FichaInput fichaInput) {
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Usuário não encontrado"));
        Ficha ficha = fichaRepository.findByUsuarioIdAndId(idUsuario, idFicha)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Ficha não encontrada"));
        modelMapper.map(fichaInput, ficha);
        ficha.setUsuario(usuario);
        ficha = fichaRepository.save(ficha);
        return modelMapper.map(ficha, FichaModel.class);
    }

    @Transactional
    public void deletarFicha(Long id) {
        Ficha ficha = fichaRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Ficha não encontrada"));
        fichaRepository.delete(ficha);
    }

    @Transactional
    public void deletarFichasPorUsuarioId(Long usuarioId) {
        List<Ficha> fichas = fichaRepository.findByUsuarioId(usuarioId);
        if (fichas.isEmpty()) {
            throw new EntidadeNaoEncontradaException("Não há fichas para o usuário informado.");
        }
        fichaRepository.deleteAll(fichas);
    }
}
