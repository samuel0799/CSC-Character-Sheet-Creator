create table ficha(
    id bigint not null auto_increment,
    usuario_id bigint not null,
    nome varchar(60) not null,
    raca varchar(20) not null,
    classe varchar(20) not null,

    atributo_forca int not null,
    atributo_destreza int not null, 
	atributo_constituicao int not null,
    atributo_inteligencia int not null,
    atributo_sabedoria int not null,
    atributo_carisma int not null,
    atributo_forca_mod int not null,
    atributo_destreza_mod int not null,
    atributo_constituicao_mod int not null,
    atributo_inteligencia_mod int not null,
    atributo_sabedoria_mod int not null,
    atributo_carisma_mod int not null,
    atributo_nivel int not null,
    atributo_pontos_de_experiencia int not null,
    atributo_pontos_de_vida int not null,
    atributo_classe_de_armadura int not null,
    primary key (id)
);

alter table ficha add constraint fk_ficha_usuario 
foreign key (usuario_id) references usuario(id);