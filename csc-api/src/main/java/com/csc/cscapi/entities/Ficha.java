package com.csc.cscapi.entities;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Ficha {
    
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String nome;

   // @Enumerated(EnumType.STRING)
    @NotBlank
    private String raca;

    //@Enumerated(EnumType.STRING)
    @NotBlank
    private String classe;

    @Embedded
    @NotNull
    private TabelaAtributos atributos;

    @ManyToOne
    private Usuario usuario;
}