package com.csc.cscapi.model.input;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FichaInput {
      
    @Valid
    @NotNull
    private UsuarioIdInput usuario;

    @Valid
    @NotBlank
    private String nome;

    @Valid
    @NotBlank
    private String raca;

    @Valid
    @NotBlank
    private  String classe;
      
    
    @Valid
    @NotNull
    private AtributosInput atributos;


}
