import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Image from "next/image";

import ResumoFicha from "@/components/ResumoFicha";

import { api } from '@/lib/axios'

import menuIcon from '../assets/icons/menuIcon.svg'
import logoutIcon from '../assets/icons/logoutIcon.svg'
import addIcon from '../assets/icons/addIcon.svg'

interface Ficha {
  id: number;
  usuario:{
    id: number;
  }
  nome: string;
  classe: string;
  raca: string;
  atributos: {
    forca: number,
    destreza: number,
    constituicao: number,
    inteligencia: number,
    sabedoria: number,
    carisma: number,
    forcaMod: number,
    destrezaMod: number,
    constituicaoMod: number,
    inteligenciaMod: number,
    sabedoriaMod: number,
    carismaMod: number,
    nivel: number
    pontosDeExperiencia: number,
    pontosDeVida: number,
    classeDeArmadura: number
  }
}

interface Props {
  fichasList: Ficha[];
}

export default function homepage(props: Props) {

  const [fichas, setFichas] = useState<Ficha[]>([]);
  //const [teste, setteste] = useState([]);


  const router = useRouter();
  const { token } = router.query

 

  useEffect(() => {
    if (token) {

      console.log("teste")
      api.get(`/fichas/user/${token}`).then((res) => {
        setFichas(res.data)
      })

        .catch((err) => {

          console.log(err)

          alert("erro ao encontrar lista de tarefas")
        })
    }

  }, [token])



  return (
    <div className=" relative bg-background-home bg-fixed bg-center bg-no-repeat ">

      <div className="left-0 top-0 absolute bg-black w-1/12 h-full drop-shadow-lg" />

      <Image className="absolute left-[1.81%] right-[93.68%] top-[1.66%] bottom-[92.48%]"
        src={menuIcon} alt="" />

      <Image className="absolute left-[1.81%] right-[93.68%] top-[90.82%] bottom-[3.32%]"
        src={logoutIcon} alt="" />
      <div className="h-12" ></div>
      <div className=" grid items-center ml-52 grid-cols-2 gap-x-10 gap-y-16 ">
        {fichas.map((ficha, index) => (
          <div className="z-30"
            key={index}>
            <ResumoFicha type={ficha.classe} nome={ficha.nome} classe={ficha.classe} nivel={ficha.atributos.nivel} raca={ficha.raca} id={ficha.id}/>
          </div>
        ))}
        <button className="bg-[url('../assets/icons/addIcon.svg')] bg-no-repeat bg-center w-[529px] h-[230px] backdrop-blur-[8.8px] bg-[rgba(255,255,255,0.32)] rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.01)_inset] [box-shadow-width:1px]">

        </button>
        <div className="h-12"></div>
      </div>
    </div>
  )
}