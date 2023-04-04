package com.csc.cscapi.model.output;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FichaModel {
    
    
    private Long id;
    private UsuarioIdNomeModel usuario;
    private String nome;
    private String raca;
    private String classe;

    private AtributosModel atributos;
 

}
