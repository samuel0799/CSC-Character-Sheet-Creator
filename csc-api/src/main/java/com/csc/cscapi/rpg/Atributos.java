package com.csc.cscapi.rpg;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Atributos {
	private int forca;
	private int destreza;
	private int constituicao;
	private int inteligencia;
	private int sabedoria;
	private int carisma;
	private int forcaMod = (int) Math.ceil(forca / 2);
	private int destrezaMod = (int) Math.ceil(destreza / 2);
	private int constituicaoMod = (int) Math.ceil(constituicao / 2);
	private int inteligenciaMod = (int) Math.ceil(inteligencia / 2);
	private int sabedoriaMod = (int) Math.ceil(sabedoria / 2);
	private int carismaMod = (int) Math.ceil(carisma / 2);
	private int nivel;
	private int pontosDeExperiencia;
	private int pontosDeVida;
	private int classeDeArmadura;
}