package com.csc.cscapi.model.input;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginInput {

@NotBlank
private String email;

@NotBlank
private String senha; 
    
}
