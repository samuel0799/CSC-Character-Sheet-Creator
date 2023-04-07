import Image from 'next/image';
import Modal from 'react-modal'

import closeIcon from '../assets/icons/closeIcon.svg'
import { useState } from 'react';



interface Props {

  nome: string;
  classe: string;
  nivel: number;
  raca: string;
  type?: 'Guerreiro' | 'Mago' | 'Ladino' | MyStringUnion
  onClose: () => void
}

type MyStringUnion = string & { 
  readonly Guerreiro?: never; 
  readonly Mago?: never; 
  readonly Ladino?: never;
}

export default function FichaModal(props:Props){
  
  const [isModalOpen, setIsModalOpen] = useState(true);


  
    return (
      <>
      {isModalOpen && (
      <div
      className="fixed z-50 flex flex-col items-start w-[1174px]  backdrop-blur-[13.2px] overflow-clip [box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.01)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/46e80acafe403e63b0b5fbac12346f1b691df91b.webp)_center_/_cover] "
      
     
    >
      <div className="flex justify-center items-center w-[1174px]">
        <div className="relative flex justify-center items-center w-[1174px] drop-shadow-lg">
          <div className="pb-4 pr-5 relative flex items-end h-[117px] pt-[17px] pl-[42px] drop-shadow-lg gap-[944px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c742ec594b7de7c20d93ad0c90f3ad9fd594c57c.webp)_center_/_cover]">
            <div className="relative rounded-full w-[84px] h-[84px] drop-shadow-lg [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/ef6926691a5436db728151392b09a42888d04a38.webp)_center_/_cover]" />
            <Image onClick={props.onClose} className='relative w-[84px] h-[84px] drop-shadow-lg"' src={closeIcon} alt=''/>
            <div className="absolute left-1/2 top-1/2 flex items-start w-[668.76px] h-[102.13px] gap-[325.78px] [transform:translate(calc(-50%_+_104.18px),calc(-50%_+_3.68px))]">
              <div className="flex flex-col items-end h-[101.96px]">
                <div className={`bg-[url("../assets/icons/coreIcon.svg")]  w-[87.43px] h-[101.96px] bg-cover`}></div>
              </div>
              <div className="flex items-end h-[99.89px] gap-[43.92px]">
                {/* <Vector1 />
                <Vector2 /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0.5 absolute top-1/2 pb-2.5 flex flex-col items-center left-[1105px] right-[54px] w-[15px] h-[643px] pt-[599px] [transform:translateY(calc(-50%_+_43.5px))]">
      </div>
    </div>
      )}
    </>
  );
}
  
    // let bgImage = '';
    // switch (props.type) {
    //   case 'Guerreiro':
    //     bgImage = 'bg-[url("")]';
    //     break;
    //   case 'Mago':
    //     bgImage = 'bg-[url("")]';
    //     break;
    //   case 'Ladino':
    //     bgImage = 'bg-[url("")]';
    //     break;
    //   default:
    //     ;
    //     break;
    // }