package com.csc.cscapi.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.csc.cscapi.entities.Usuario;
import com.csc.cscapi.model.input.UsuarioInput;
import com.csc.cscapi.model.output.UsuarioModel;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Component
public class UsuarioAssembler {
    
    private ModelMapper modelMapper;
  

    public UsuarioModel toModel(Usuario usuario){
        return modelMapper.map(usuario, UsuarioModel.class);
    }

  
    public List<UsuarioModel> toCollectionModel(List<Usuario> fichas){
        return fichas.stream()
                .map(this::toModel)
                .collect(Collectors.toList()); 
    }

    public Usuario toEntity(UsuarioInput usuarioInput){
        return modelMapper.map(usuarioInput, Usuario.class);
    }
}