package com.csc.cscapi.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.csc.cscapi.entities.Ficha;
import com.csc.cscapi.model.input.FichaInput;
import com.csc.cscapi.model.output.FichaModel;
import com.csc.cscapi.repositories.FichaRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Component
public class FichaAssembler {
    
    private ModelMapper modelMapper;
    private FichaRepository fichaRepository;

    public FichaModel toModel(Ficha ficha){
        return modelMapper.map(ficha, FichaModel.class);
    }

    public List<FichaModel> listarFichasPorUsuarioId(Long usuarioId) {
        List<Ficha> fichas = fichaRepository.findByUsuarioId(usuarioId);
        return toCollectionModel(fichas);
    }
    public List<FichaModel> toCollectionModel(List<Ficha> fichas){
        return fichas.stream()
                .map(this::toModel)
                .collect(Collectors.toList()); 
    }

    public Ficha toEntity(FichaInput fichaInput){
        return modelMapper.map(fichaInput, Ficha.class);
    }
}
