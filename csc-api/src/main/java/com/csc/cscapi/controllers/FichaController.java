package com.csc.cscapi.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.csc.cscapi.assembler.FichaAssembler;
import com.csc.cscapi.entities.Ficha;
import com.csc.cscapi.model.input.FichaInput;
import com.csc.cscapi.model.output.FichaModel;
import com.csc.cscapi.services.FichaService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/fichas")
public class FichaController {

    private FichaService fichaService;

    private FichaAssembler fichaAssembler;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FichaModel criar(@Valid @RequestBody FichaInput fichaInput) {
        Ficha novaFicha = fichaAssembler.toEntity(fichaInput);

        Ficha fichaCriada = fichaService.criaFicha(novaFicha);

        return fichaAssembler.toModel(fichaCriada);
    }

    @GetMapping("/{usuarioId}")
    public List<Ficha> listarFichasPorIdUsuario(@PathVariable Long usuarioId) {
        return fichaService.listarFichasPorUsuarioId(usuarioId);
    }
}
