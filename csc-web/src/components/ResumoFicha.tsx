import { useState } from "react";
import FichaModal from "./FichaModal";
import closeIcon from '../assets/icons/closeIcon.svg'
import Image from "next/image";


interface Props {


  nome: string;
  classe: string;
  nivel: number;
  raca: string;
  type?: 'Guerreiro' | 'Mago' | 'Ladino' | MyStringUnion
  // excluir: () => void
}

type MyStringUnion = string & {
  readonly Guerreiro?: never;
  readonly Mago?: never;
  readonly Ladino?: never;
}

export default function ResumoFicha(props: Props) {


  let bgColor = '';
  switch (props.type) {
    case 'Guerreiro':
      bgColor = 'bg-[#D5535352]';
      break;
    case 'Mago':
      bgColor = 'bg-[#4659A452]';
      break;
    case 'Ladino':
      bgColor = 'bg-[#6BB75C52]';
      break;
    default:
      bgColor = 'bg-[gray-500]';
      break;
  }

  let iconImage = '';
  switch (props.type) {
    case 'Guerreiro':
      iconImage = 'bg-[url("/guerreiroIcon.png")]';
      break;
    case 'Mago':
      iconImage = 'bg-[url("/magoIcon.png")]'
      break;
    case 'Ladino':
      iconImage = 'bg-[url("/ladinoIcon.png")]';
      break;
    default:
      break;
      ;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  return (

     
     
           
      <div
        className={`relative text-white w-[529px] h-[230px] backdrop-blur-[8.8px]`}

      >



        <div className={`inset-0 absolute w-[529px] backdrop-blur-[8.8px] rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(213,_83,_83,_0.01)_inset] [box-shadow-width:1px] ${bgColor}`} />
        <p className="w-72 absolute text-base font-semibold text-center inline m-0 h-[72px] left-[37.62%] right-[7.94%] top-[47.83%] bottom-[20.87%] leading-[normal]">
          Classe - {props.classe} lv {props.nivel}
          <br />
          Raça - {props.raca}
          <br />
          Antecedente - Nobre
          <br />
          Alinhamento - Leal Bom
          <br />
        </p>
        <div className={`absolute rounded-full border-solid border-4 border-black w-[120px] left-[3.78%] right-[73.53%] top-[21.74%] bottom-[26.09%] drop-shadow-lg ${iconImage} bg-center bg-cover cursor-pointer`} />

        <p className="w-72 absolute font-bold text-left inline m-0 h-[38px] left-[38.19%] right-[7.37%] top-[26.52%] bottom-[56.96%] text-[32px] leading-[normal]">
          {props.nome}
        </p>
       
      </div>
  
  );
}


// <div className={`${bgColor}`}>
//     <h1>{props.nome}</h1>
//   <p>Classe: {props.classe}</p>
//   <p>Nível: {props.nivel}</p>
//   <p>Raça: {props.raca}</p>
// </div>