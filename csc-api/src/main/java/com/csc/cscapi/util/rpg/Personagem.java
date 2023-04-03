package com.csc.cscapi.util.rpg;

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
	private Atributos atributos;
}