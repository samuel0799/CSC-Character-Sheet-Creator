import { api } from "@/lib/axios";
import { FormEvent, useState } from "react";
import Image from "next/image";

import closeIcon from '../assets/icons/closeIcon.svg';

interface Props {
    isOpen: boolean
    onClose: () => void
    id: string | string[] | undefined
}

export default function NovaFicha(props: Props) {


    const [nome, setNome] = useState('')
    const [raca, setRaca] = useState('')
    const [classe, setClasse] = useState('')
    const [nivel, setNivel] = useState('')
    const [forca, setForca] = useState('')
    const [destreza, setDestreza] = useState('')
    const [constituicao, setConstituicao] = useState('')
    const [inteligencia, setInteligencia] = useState('')
    const [sabedoria, setSabedoria] = useState('')
    const [carisma, setCarisma] = useState('')
    const [pontosDeExperiencia, setPontosDeExperiencia] = useState('')
    const [pontosDeVida, setPontosDeVida] = useState('')
    const [classeDeArmadura, setClasseDeArmadura] = useState('')


    const [close, setClose] = useState(true)

    async function cadastrarNovaFicha(event: FormEvent) {
        event.preventDefault()


        try {
            await api.post("/fichas/criar", {
                usuario: {
                    id: props.id
                },
                nome: nome,
                raca: raca,
                classe: classe,
                atributos: {
                    forca: forca,
                    destreza: destreza,
                    constituicao: constituicao,
                    inteligencia: inteligencia,
                    sabedoria: sabedoria,
                    carisma: carisma,
                    nivel: nivel,
                    pontosDeExperiencia: pontosDeExperiencia,
                    pontosDeVida: pontosDeVida,
                    classeDeArmadura: classeDeArmadura
                }
            });

            alert("Ficha Criada, atualize a página")

            setNome("")
            setRaca("")
            setClasse("")
            setForca('')
            setNivel('')
            setDestreza('')
            setConstituicao('')
            setInteligencia('')
            setSabedoria('')
            setCarisma('')
            setPontosDeExperiencia('')
            setPontosDeVida('')
            setClasseDeArmadura('')




        } catch (error) {
            console.log(error)
            alert("falha ao criar Ficha")
        }

    }

    console.log(raca)

    return (
        <>
            {props.isOpen && (
                <div className="z-20 w-full h-screen  flex fixed justify-center items-center">
                    <div className="h-full w-4/5 max-h-full  [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/46e80acafe403e63b0b5fbac12346f1b691df91b.webp)_center_/_cover]  shadow-2xl rounded-2xl opacity-100 overflow-y-scroll">
                        <div className="w-full flex justify-end">
                            <button onClick={props.onClose}>
                                <Image className="mt-2 mr-2" height={30} src={closeIcon} alt="" />
                            </button>
                        </div>
                        <div className="">
                            <div className=" flex justify-center items-center">
                                <h1 className="text-black font-bold text-5xl">Nova Ficha</h1>
                            </div>

                            <div className=" w-full h-full items-center mt-1" >
                                <form onSubmit={cadastrarNovaFicha} action="homepage" className="">

                                    <div className=" flex  justify-center ">
                                        <div className=" w-3/4 h-full ">

                                            <div className="" >
                                                <label className="block text-black font-bold " htmlFor="">Nome do Personagem</label>
                                                <input
                                                    className=" w-full p-2 mt-1 mb-5 rounded-md "
                                                    required={true}
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
                                                                    onChange={event => setForca(event.target.value)}
                                                                    value={forca}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Destreza</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setDestreza(event.target.value)}
                                                                    value={destreza}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Constituição</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setConstituicao(event.target.value)}
                                                                    value={constituicao}
                                                                    type="number"
                                                                />
                                                            </div>

                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Inteligência</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setInteligencia(event.target.value)}
                                                                    value={inteligencia}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Sabedoria</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setSabedoria(event.target.value)}
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
                                                                    onChange={event => setCarisma(event.target.value)}
                                                                    value={carisma}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Nível</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md  break-before-auto items-start "
                                                                    onChange={event => setNivel(event.target.value)}
                                                                    value={nivel}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Pontos de Experiência</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md  break-before-auto items-start "
                                                                    onChange={event => setPontosDeExperiencia(event.target.value)}
                                                                    value={pontosDeExperiencia}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Pontos de Vida</label>
                                                                <input
                                                                    className=" flex w-6/12 rounded-md break-before-auto items-start "
                                                                    onChange={event => setPontosDeVida(event.target.value)}
                                                                    value={pontosDeVida}
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <label className="block mb-2 text-black font-bold" htmlFor="">Classe de Armadura</label>
                                                                <input
                                                                    className=" flex w-6/12 break-before-auto items-start rounded-md "
                                                                    onChange={event => setClasseDeArmadura(event.target.value)}
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
                                        >CRIAR FICHA</button>
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