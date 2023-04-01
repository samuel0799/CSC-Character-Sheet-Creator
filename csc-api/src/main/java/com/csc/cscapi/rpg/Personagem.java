package com.csc.cscapi.rpg;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Personagem {
    private String nome;
    private String raca;
    private String classe;
    private int nivel;
    private int pontosDeExperiencia;
    private int pontosDeVida;
    private int pontosDeMana;
    private int forca;
    private int destreza;
    private int constituicao;
    private int inteligencia;
    private int sabedoria;
    private int carisma;
    private int classeDeArmadura;
    
}
   