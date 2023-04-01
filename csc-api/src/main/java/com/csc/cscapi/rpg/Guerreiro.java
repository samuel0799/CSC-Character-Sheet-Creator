package com.csc.cscapi.rpg;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Guerreiro extends Personagem {
    private int pontosDeFuria;
    private int dadosDeDano;

    public Guerreiro(String nome, String raca, int nivel, int pontosDeExperiencia,int pontosDeVida, int pontosDeFuria,  int dadosDeDano, int forca, int destreza, int constituicao, int inteligencia, int sabedoria, int carisma, int classeDeArmadura) {
        super(nome, raca, "Guerreiro", nivel, pontosDeExperiencia, pontosDeVida, 0, forca, destreza, constituicao, inteligencia, sabedoria, carisma, classeDeArmadura);
        this.pontosDeFuria = pontosDeFuria;
        this.dadosDeDano = dadosDeDano;
    }

    public void entrarEmFuria() {
        if (getPontosDeFuria() > 0) {
            setPontosDeFuria(getPontosDeFuria() - 1);
            setDadosDeDano(getDadosDeDano() + 2);
            System.out.println(getNome() + " entrou em fúria!");
        } else {
            System.out.println(getNome() + " não tem pontos de fúria suficientes para entrar em fúria.");
        }
    }
}

