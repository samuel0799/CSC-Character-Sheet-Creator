package com.csc.cscapi.rpg;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Mago extends Personagem {
    private int pontosDeMagia;

    public Mago(String nome, String raca, int nivel, int pontosDeExperiencia, int pontosDeVida, int pontosDeMagia, int forca, int destreza, int constituicao, int inteligencia, int sabedoria, int carisma, int classeDeArmadura) {
        super(nome, raca, "Mago", nivel, pontosDeExperiencia, pontosDeVida, pontosDeMagia, forca, destreza, constituicao, inteligencia, sabedoria, carisma, classeDeArmadura);
        this.pontosDeMagia = pontosDeMagia;
    }
 
    public int getPontosDeMagia() {
        return pontosDeMagia;
    }

    public void conjurarMagia(int custoDeMana) {
        if (getPontosDeMana() >= custoDeMana) {
            setPontosDeMana(getPontosDeMana() - custoDeMana);
            System.out.println(getNome() + " conjurou uma magia!");
        } else {
            System.out.println(getNome() + " não tem pontos de mana suficientes para conjurar uma magia.");
        }
    }
}

