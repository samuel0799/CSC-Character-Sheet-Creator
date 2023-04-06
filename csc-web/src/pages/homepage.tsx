import { useRouter } from "next/router"
import Ficha from "@/components/Ficha";
import { useEffect, useState } from "react";
import {api} from '@/lib/axios'

interface Ficha {

    nome: string;
    classe: string;
    raca: string;
    atributos:{
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

export default function homepage(props:Props){

  const [fichas, setFichas] = useState<Ficha[]>([]);
  //const [teste, setteste] = useState([]);

  const router = useRouter();
  const { token } = router.query

  useEffect(()=> {
    if(token){

      console.log("teste")
      api.get(`/fichas/user/${token}`).then((res) =>{
        setFichas(res.data)
      })
      
      .catch((err)=>{
        
        console.log(err)
        
        alert("erro ao encontrar lista de tarefas")
      })
    }
  
  },[token])



    return(
      <div>
    {fichas.map((ficha, index) => (
      <div key={index}>
        <Ficha type={ficha.classe} nome={ficha.nome} classe={ficha.classe} nivel={ficha.atributos.nivel} raca={ficha.raca}/>
      </div>
    ))}
  </div>
    )}