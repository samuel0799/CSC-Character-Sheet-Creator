import { useRouter } from "next/router"
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import ResumoFicha from "@/components/ResumoFicha";

import { api } from '@/lib/axios'

import menuIcon from '../assets/icons/menuIcon.svg'
import logoutIcon from '../assets/icons/logoutIcon.svg'
import addIcon from '../assets/icons/addIcon.svg'
import closeIcon from '../assets/icons/closeIcon.svg'
import deleteIcon from '../assets/icons/deleteIcon.svg'

import FichaModal from "@/components/FichaModal";
import NovaFicha from "@/components/NovaFicha";

interface Ficha {
  id: number;
  usuario: {
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

  const [isOpenModal, setIsOpenModal] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(-1);

  function handleOpenModal(index: number) {
    setIsModalOpen(true);
    setModalIndex(index)
  }

  function logOut() {
    router.push('/login')
  }



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


    async function excluir(id: number){
      try {
        const response = await api.delete(`/fichas/${id}`)
  
        if(response.status === 200){
          alert("ficha apagada com sucesso")
        } 
  
      } catch (error) {
        console.log(error)
        alert(`não foi possivel apagar a ficha id: ${id}`)
      }
    }
   
  

  return (
    <div className="relative bg-background-home w-full min-h-screen max-h-full bg-fixed bg-center bg-no-repeat bg-cover"   >

      <div className="">
        <NovaFicha isOpen={isOpenModal} onClose={() => {
          setIsOpenModal(false)
        }} id={token} />
      </div>
      <div className="left-0 top-0 absolute bg-black w-1/12 h-full drop-shadow-lg" />

      <Image className="absolute left-[1.81%] right-[93.68%] top-[1.66%] bottom-[92.48%]"
        src={menuIcon} alt="" />

      <Image className="absolute left-[1.81%] right-[93.68%] top-[90.82%] bottom-[3.32%] cursor-pointer"
        src={logoutIcon} alt="" onClick={logOut} />
      <div className="h-12" ></div>
      <div className="  grid items-center ml-52 grid-cols-2 gap-x-10 gap-y-24">

        {fichas.map((ficha, index) => (

          <div className="relative">
             <div className=" ml-[470px] absolute z-10">
              <Image onClick={()=>excluir(ficha.id)}  className='relative w-[60px] h-[60px] drop-shadow-lg cursor-pointer' src={deleteIcon} alt='' />
            </div>
        
            <div className=""
              onClick={() => handleOpenModal(index)}
              key={index}>
              <ResumoFicha type={ficha.classe} nome={ficha.nome} classe={ficha.classe} nivel={ficha.atributos.nivel} raca={ficha.raca} />
              {isModalOpen && modalIndex === index && (
                <FichaModal
                  nome={ficha.nome}
                  classe={ficha.classe}
                  id={ficha.id}
                  raca={ficha.raca}
                  atributos={ficha.atributos}
                  type={ficha.classe} usuario={{
                    id:ficha.usuario.id
                  }}                // onClose={handleCloseModal}

                />
              )}
            </div>
          </div>

        ))}

        <button className="bg-[url('../assets/icons/addIcon.svg')] bg-no-repeat bg-center w-[529px] h-[230px] backdrop-blur-[8.8px] bg-[rgba(255,255,255,0.32)] rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.01)_inset] [box-shadow-width:1px]"

          onClick={() => {
            setIsOpenModal(true);
          }}
        >
        </button>
      </div>
    </div>

  )
}