package com.csc.cscapi.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.csc.cscapi.assembler.FichaAssembler;
import com.csc.cscapi.entities.Ficha;
import com.csc.cscapi.model.input.FichaInput;
import com.csc.cscapi.model.output.FichaModel;
import com.csc.cscapi.repositories.FichaRepository;
import com.csc.cscapi.services.FichaService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/fichas")
public class FichaController {

    private FichaService fichaService;
    private FichaRepository fichaRepository;
    private FichaAssembler fichaAssembler;

    @PostMapping("/criar")
    @ResponseStatus(HttpStatus.CREATED)
    public FichaModel criar(@Valid @RequestBody FichaInput fichaInput) {
        Ficha novaFicha = fichaAssembler.toEntity(fichaInput);

        Ficha fichaCriada = fichaService.criaFicha(novaFicha);

        return fichaAssembler.toModel(fichaCriada);
    }

    @GetMapping("/{fichaId}")
    public FichaModel buscar(@PathVariable Long fichaId){
        return fichaService.buscarPorId(fichaId);
    }

    @GetMapping
    public List<FichaModel> listarFichas() {
        return fichaAssembler.toCollectionModel(fichaRepository.findAll());
    }

    @GetMapping("user/{usuarioId}")
    public List<FichaModel> listarFichasPorId(@PathVariable Long usuarioId) {
        return fichaAssembler.listarFichasPorUsuarioId(usuarioId);
    }

    @PutMapping("/editar/{fichaId}")
    public FichaModel atualizarFicha(@PathVariable Long fichaId, @RequestBody FichaInput fichaInput) {
        Long usuarioId = fichaInput.getUsuario().getId();
        return fichaService.atualizar(usuarioId,fichaId,fichaInput);
    }

    @DeleteMapping("{fichaId}")
    public void deletarFichaPorId(@PathVariable Long fichaId){
        fichaService.deletarFicha(fichaId);
    }

    @DeleteMapping("user/{usuarioId}")
    public void deletarFichasDoUsuario(@PathVariable Long usuarioId) {
        fichaService.deletarFichasPorUsuarioId(usuarioId);
    }
}
