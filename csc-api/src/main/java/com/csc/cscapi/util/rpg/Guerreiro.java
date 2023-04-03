package com.csc.cscapi.util.rpg;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Guerreiro extends Personagem {

	public Guerreiro(String nome, String raca, Atributos atributos) {
		super(nome, raca, "Guerreiro", atributos);
	}
}