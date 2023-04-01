package com.csc.cscapi.rpg;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Mago extends Personagem {
	private int espacoDeMagia;

	public Mago(String nome, String raca, String classe, Atributos atributos, int espacoDeMagia) {
		super(nome, raca, "Mago", atributos);
		this.espacoDeMagia = espacoDeMagia;
	}
}
