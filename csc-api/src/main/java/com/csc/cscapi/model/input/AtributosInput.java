package com.csc.cscapi.model.input;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AtributosInput {

    @NotNull
    private int forca;

    @NotNull
    private int destreza;

    @NotNull
    private int constituicao;

    @NotNull
    private int inteligencia;

    @NotNull
    private int sabedoria;

    @NotNull
    private int carisma;

    @NotNull
    private int nivel;

    @NotNull
    private int pontosDeExperiencia;

    @NotNull
	private int pontosDeVida;

    @NotNull
	private int classeDeArmadura;
    
}
