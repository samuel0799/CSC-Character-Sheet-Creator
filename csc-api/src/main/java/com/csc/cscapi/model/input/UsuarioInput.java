package com.csc.cscapi.model.input;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioInput {
    
    @Valid
    @NotBlank
    private String nome;

    @Valid
    @NotBlank
    private String email;

}
