import { api } from "@/lib/axios";
import { FormEvent, useState } from "react";
import Image from "next/image";

import closeIcon from '../assets/icons/closeIcon.svg';

interface Props {
    isOpen: boolean
    onClose: () => void

    usuario:{
        id:number
    }

    nome: string;
    classe: string;
    id: number;
    raca: string;
    atributos:{
      forca: number,
      destreza: number,
      constituicao: number,
      inteligencia: number,
      sabedoria: number,
      carisma: number,
      nivel: number
      pontosDeExperiencia: number,
      pontosDeVida: number,
      classeDeArmadura: number
}
}
export default function EditarFicha(props: Props) {


    const [nome, setNome] = useState(props.nome)
    const [raca, setRaca] = useState(props.raca)
    const [classe, setClasse] = useState(props.classe)
    const [nivel, setNivel] = useState(props.atributos.nivel)
    const [forca, setForca] = useState(props.atributos.forca)
    const [destreza, setDestreza] = useState(props.atributos.destreza)
    const [constituicao, setConstituicao] = useState(props.atributos.constituicao)
    const [inteligencia, setInteligencia] = useState(props.atributos.inteligencia)
    const [sabedoria, setSabedoria] = useState(props.atributos.sabedoria)
    const [carisma, setCarisma] = useState(props.atributos.carisma)
    const [pontosDeExperiencia, setPontosDeExperiencia] = useState(props.atributos.pontosDeExperiencia)
    const [pontosDeVida, setPontosDeVida] = useState(props.atributos.pontosDeVida)
    const [classeDeArmadura, setClasseDeArmadura] = useState(props.atributos.classeDeArmadura)


    

    async function editarFicha(event: FormEvent) {
        event.preventDefault()


        try {
            api.put(`/fichas/editar/${props.id}`,{
            usuario: {
                id:props.usuario.id,
            },
            nome:nome,
	        raca:raca,
	        classe:classe,
	        atributos:{
		        forca: forca,
		        destreza:destreza,
		        constituicao:constituicao,
		        inteligencia:inteligencia,
		        sabedoria:sabedoria,
		        carisma:carisma,
                nivel:nivel,
                classeDeArmadura:classeDeArmadura,
                pontosDeVida:pontosDeVida,
                pontosDeExperiencia:pontosDeExperiencia,
            
            }}).then((res)=>{
              if(res.status === 200){
             
              }
            })
            
      
    
          } catch (error) {
            
            alert("Falha ao editar tarefa")
    
    
          }
    
    
    
    }

    console.log(raca)

    return (
        <>
            {props.isOpen && (
                <div className="fixed ml-40 z-30 inset-0 flex justify-center items-end  bg-opacity-70">
                    <div className="h-full w-4/5 max-h-full  [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/46e80acafe403e63b0b5fbac12346f1b691df91b.webp)_center_/_cover]  shadow-2xl rounded-2xl opacity-100 overflow-y-scroll">
                        <div className="w-full flex justify-end">
                            <button onClick={props.onClose}>
                                <Image className="mt-2 mr-2" height={30} src={closeIcon} alt="" />
                            </button>
                        </div>
                        <div className="">
                            <div className=" flex justify-center items-center">
                                <h1 className="text-black font-bold text-5xl">Editar Ficha</h1>
                            </div>

                            <div className=" w-full h-full items-center mt-1" >
                                <form onSubmit={editarFicha} action="homepage" className="">

                                    <div className=" flex  justify-center ">
                                        <div className=" w-3/4 h-full ">

                                            <div className="" >
                                                <label className="block text-black font-bold " htmlFor="">Nome do Personagem</label>
                                                <input
                                                    className=" w-full p-2 mt-1 mb-5 rounded-md "
                                                    onChange={event => setNome(event.target.value)}
                                                    value={nome}
                                                    type="text"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <div className="flex justify-center items-center mb-2">
                                                    <label htmlFor="" className="mr-2 text-black font-bold text-3xl">Raça</label>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <label htmlFor="Humano" className={`cursor-pointer inline-block items-center mr-2 ${raca === 'Humano' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Humano" name="raca" value="Humano" className="hidden" onChange={event => setRaca(event.target.value)} />
                                                        <span className="text-black font-bold text-sm mb-1">Humano</span>
                                                        <Image src="/humano.png" alt="Humano" width={120} height={320}
                                                            className="border-2 border-black" />
                                                    </label>
                                                    <label htmlFor="Elfo" className={`cursor-pointer inline-block items-center mr-2 ${raca === 'Elfo' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Elfo" name="raca" value="Elfo" className="hidden" onChange={event => setRaca(event.target.value)} />
                                                        <span className="text-black font-bold   text-sm mb-1">Elfo</span>
                                                        <Image src="/elfo.png" alt="Elfo" width={120} height={320} className="border-2 border-black" />
                                                    </label>
                                                    <label htmlFor="Anao" className={`cursor-pointer inline-block items-center mr-2 ${raca === 'Anao' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Anao" name="raca" value="Anao" className="hidden" onChange={event => setRaca(event.target.value)} />
                                                        <span className="text-black font-bold text-sm mb-1">Anão</span>
                                                        <Image src="/anao.png" alt="Anao" width={120} height={300}
                                                            className="border-2 border-black" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex justify-center items-center mb-2">
                                                    <label htmlFor="" className="mr-2 text-black font-bold text-3xl">Classe</label>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <label htmlFor="Guerreiro" className={`cursor-pointer inline-block items-center mr-2 ${classe === 'Guerreiro' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Guerreiro" name="classe" value="Guerreiro" className="hidden" onChange={event => setClasse(event.target.value)} />
                                                        <span className="text-black font-bold text-sm mb-1">Guerreiro</span>
                                                        <Image src="/guerreiro.png" alt="Anao" width={120} height={300}
                                                            className="border-2 border-black" />
                                                    </label>
                                                    <label htmlFor="Mago" className={`cursor-pointer inline-block items-center mr-2 ${classe === 'Mago' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Mago" name="classe" value="Mago" className="hidden" onChange={event => setClasse(event.target.value)} />
                                                        <span className="text-black font-bold text-sm mb-1">Mago</span>
                                                        <Image src="/mago.png" alt="Anao" width={120} height={300}
                                                            className="border-2 border-black" />
                                                    </label>
                                                    <label htmlFor="Ladino" className={`cursor-pointer inline-block items-center mr-2 ${classe === 'Ladino' ? 'selected' : ''}`}>
                                                        <input type="radio" id="Ladino" name="classe" value="Ladino" className="hidden" onChange={event => setClasse(event.target.value)} />
                                                        <span className="text-black font-bold text-sm mb-1">Ladino</span>
                                                        <Image src="/ladino.png" alt="Anao" width={120} height={300}
                                                            className="border-2 border-black" />

                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="mb-2">
                                                    <label htmlFor="" className="mr-2 text-black font-bold text-3xl">Atributos</label>
                                                </div>
                                                <div className="flex ">
                                                    <div className="grid  grid-cols-2">
                                                        <div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Força</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setForca(event.target.valueAsNumber)}
                                                                    value={forca}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Destreza</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setDestreza(event.target.valueAsNumber)}
                                                                    value={destreza}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Constituição</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setConstituicao(event.target.valueAsNumber)}
                                                                    value={constituicao}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Inteligência</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setInteligencia(event.target.valueAsNumber)}
                                                                    value={inteligencia}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Sabedoria</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setSabedoria(event.target.valueAsNumber)}
                                                                    value={sabedoria}
                                                                    type="number"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Carisma</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setCarisma(event.target.valueAsNumber)}
                                                                    value={carisma}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Nível</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md  break-before-auto items-start "
                                                                    onChange={event => setNivel(event.target.valueAsNumber)}
                                                                    value={nivel}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Pontos de Experiência</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md  break-before-auto items-start "
                                                                    onChange={event => setPontosDeExperiencia(event.target.valueAsNumber)}
                                                                    value={pontosDeExperiencia}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Pontos de Vida</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setPontosDeVida(event.target.valueAsNumber)}
                                                                    value={pontosDeVida}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Classe de Armadura</label>
                                                                <input
                                                                    className=" flex w-6/12 break-before-auto items-start rounded-md "
                                                                    onChange={event => setClasseDeArmadura(event.target.valueAsNumber)}
                                                                    value={classeDeArmadura}
                                                                    type="number"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center mt-24 mb-24">
                                        <button
                                            className="bg-opacity-100 rounded-xl shadow-black shadow-lg p-5 border-yellow-800 border-4 text-yellow-800 font-bold"
                                            type="submit"
                                            //onClick={props.onClose}
                                        >FINALIZAR EDIÇÃO</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )


}


{/* <div className="mb-2"></div>
                                                    <label htmlFor="" className="mr-2 text-white">Raça</label>
                                                    <select name="" id="" value={"Humano"} onChange={event=> setRaca(event.target.value)}>
                                                        <option value="Humano">Humano</option>
                                                        <option value="Anão">Anão</option>
                                                        <option value="Elfo">Elfo</option>
                                                    </select> */}

{/* <div className="mt-1">
                                                <label htmlFor="" className="mr-2 text-white">Classe</label>
                                                <select name="" id="" value={"Guerreiro"} onChange={event => setClasse(event.target.value)}>
                                                    <option value="Guerreiro">Guerreiro</option>
                                                    <option value="Mago">Mago</option>
                                                    <option value="Ladino">Ladino</option>
                                                </select>
                                            </div> */}