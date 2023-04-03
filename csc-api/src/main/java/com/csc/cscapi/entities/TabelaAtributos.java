package com.csc.cscapi.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Embeddable
public class TabelaAtributos {

    @NotNull
    @Column(name="atributo_forca")
    private int forca;
	
    @NotNull
    @Column(name="atributo_destreza")
    private int destreza;
	
    @NotNull
    @Column(name="atributo_constituicao")
    private int constituicao;
	    
    @NotNull
    @Column(name="atributo_inteligencia")
    private int inteligencia;
	   
    @NotNull
    @Column(name="atributo_sabedoria")
    private int sabedoria;
	   
    @NotNull
    @Column(name="atributo_carisma")
    private int carisma;
	  
    @NotNull
    @Column(name="atributo_forca_mod")
    private int forcaMod;
	
    @NotNull
    @Column(name="atributo_destreza_mod")
    private int destrezaMod;
	
    @NotNull
    @Column(name="atributo_constituicao_mod")
    private int constituicaoMod;
	
    @NotNull
    @Column(name="atributo_inteligencia_mod")
    private int inteligenciaMod;
	
    @NotNull
    @Column(name="atributo_sabedoria_mod")
    private int sabedoriaMod;
	
    // @NotNull
    @Column(name="atributo_carisma_mod")
    private int carismaMod;
	
    @NotNull
    @Column(name="atributo_nivel")
    private int nivel;
	
    @NotNull
    @Column(name="atributo_pontos_de_experiencia")
    private int pontosDeExperiencia;
	
    @NotNull
    @Column(name="atributo_pontos_de_vida")
    private int pontosDeVida;
	
    @NotNull
    @Column(name="atributo_classe_de_armadura")
    private int classeDeArmadura;
}
