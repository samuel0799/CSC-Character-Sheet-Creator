import { useState } from "react";
import FichaModal from "./FichaModal";


interface Props {

  id: number,
  nome: string;
  classe: string;
  nivel: number;
  raca: string;
  type?: 'Guerreiro' | 'Mago' | 'Ladino' | MyStringUnion
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

  const [isModalOpen, setIsModalOpen] = useState(false);


  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (


    <div
      className={`relative text-white w-[529px] h-[230px] backdrop-blur-[8.8px]`}
      onClick={handleOpenModal}
    >
      {isModalOpen && (
        <FichaModal
          nome={""}
          classe={""}
          nivel={0}
          raca={""}
          onClose={handleCloseModal}
        />)}
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
      <div className="absolute rounded-full border-solid border-4 border-black w-[120px] left-[3.78%] right-[73.53%] top-[21.74%] bottom-[26.09%] drop-shadow-lg [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/92fe15eeec79214fd4b9624e3aa1dd5380fdff0f.webp)_center_/_cover]" />

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