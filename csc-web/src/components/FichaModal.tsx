import Image from 'next/image';
import Modal from 'react-modal'

import closeIcon from '../assets/icons/closeIcon.svg'
import { useState } from 'react';

import { api } from '@/lib/axios';
import EditarFicha from './EditarFicha';
import editIcon from "../assets/icons/editIcon.svg"



interface Props {

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
    forcaMod: number,
    destrezaMod: number,
    constituicaoMod: number,
    inteligenciaMod: number,
    sabedoriaMod: number,
    carismaMod: number,
    nivel: number,
    pontosDeExperiencia: number,
    pontosDeVida: number,
    classeDeArmadura: number
  };
  type?: 'Guerreiro' | 'Mago' | 'Ladino' | MyStringUnion
  //onClose: () => void
}

type MyStringUnion = string & {
  readonly Guerreiro?: never;
  readonly Mago?: never;
  readonly Ladino?: never;
}

export default function FichaModal(props: Props) {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [EditOpen, setEditOpen] = useState(false);

 

  function handleCloseModal() {
    setIsModalOpen(false);
    // setModalIndex(-1)
  }


  let bgImage = '';
  switch (props.type) {
    case 'Guerreiro':
      bgImage = 'bg-[url("/dadovermelho.png")]';
      break;
    case 'Mago':
      bgImage = '[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c742ec594b7de7c20d93ad0c90f3ad9fd594c57c.webp)_center_/_cover]'
      break;
    case 'Ladino':
      bgImage = 'bg-[url("/dadoverde.png")]';
      break;
    default:
      bgImage = 'bg-[url("/dadocinza.png")]';
      break;
      ;
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

  return (



    <>  
    <div className="fixed z-40">
    <EditarFicha isOpen={EditOpen} onClose={() => {
          setEditOpen(false);
         
        } }  usuario={{id: props.usuario.id}} id={props.id} nome={props.nome} classe={props.classe} raca={props.raca} atributos={{
          forca: props.atributos.forca,
          destreza: props.atributos.destreza,
          constituicao: props.atributos.constituicao,
          inteligencia: props.atributos.inteligencia,
          sabedoria: props.atributos.sabedoria,
          carisma: props.atributos.carisma,
          nivel: props.atributos.nivel,
          pontosDeExperiencia: props.atributos.pontosDeExperiencia,
          pontosDeVida: props.atributos.pontosDeVida,
          classeDeArmadura: props.atributos.classeDeArmadura
        }} />
  </div>
      {isModalOpen && (
        <div className="fixed ml-40 z-30 inset-0 flex justify-center items-end  bg-opacity-70">
        
          <div
            className={`fixed z-30 flex flex-col w-[1174px] h-full  backdrop-blur-[13.2px] overflow-clip [box-shadow:0px_0px_0px_1px_rgba(255,_255,_255,_0.01)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/46e80acafe403e63b0b5fbac12346f1b691df91b.webp)_center_/_cover] `}
            

          >
            
            <div className="flex justify-center items-center w-[1174px]">

              <div className="relative flex justify-center items-center w-[1174px] drop-shadow-lg">
                
                <div className={`pb-4 pr-5 relative flex items-end h-[117px] pt-[17px] pl-[42px] drop-shadow-lg gap-[944px] ${bgImage} bg-cover bg-center `}>
                  
                  <div className={`relative rounded-full w-[84px] h-[84px] drop-shadow-lg ${iconImage} bg-center bg-cover`} />
                
                  <Image onClick={handleCloseModal} className='relative w-[84px] h-[84px] drop-shadow-lg cursor-pointer' src={closeIcon} alt='' />
                  <div className="absolute left-1/2 top-1/2 flex items-start w-[668.76px] h-[102.13px] gap-[325.78px] [transform:translate(calc(-50%_+_104.18px),calc(-50%_+_3.68px))]">
                    <div className="flex flex-col items-end h-[101.96px]">
                      <div className={`bg-[url("../assets/icons/coreIcon.svg")]  w-[87.43px] h-[101.96px] bg-cover`}></div>
                    </div>
                    <div className="flex items-end h-[99.89px] gap-[43.92px]">
                    <Image onClick={()=>(setEditOpen(true))} src={editIcon} alt='' className='relative w-[84px] h-[84px] drop-shadow-lg cursor-pointer'/>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className='flex'>
              <div className='border-solid border-2 border-black  w-[30%] my-2 ml-6 h-[100%] bg-white'>
                <div className='gap-y-5 mt-2 grid'>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat  h-full '>
                        <div className='justify-center'>
                          <p className="text-sm font-bold relative h-[13.05px] block w-[55.17px]">
                            FOR
                          </p>
                          <p className="font-bold relative h-[30px] w-[45px] block text-[32px]">
                            {props.atributos.forca}
                          </p>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Teste de Resistencia</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Atletismo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat h-full '>
                        <div>
                          <p className="text-sm font-bold relative h-[13.05px]  w-[55.17px]">
                            DES
                          </p>
                          <p className="font-bold relative h-[30px] w-[45px] text-[32px]">
                            {props.atributos.destreza}
                          </p>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Acrobatismo</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Furtividade</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat h-full '>
                        <div>
                          <p className="text-sm font-bold relative h-[13.05px]  w-[55.17px]">
                            CON
                          </p>
                          <p className="font-bold relative h-[30px] w-[45px] text-[32px]">
                            {props.atributos.constituicao}
                          </p>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Teste de Resistencia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat  h-full '>
                        <div>
                          <p className="text-sm font-bold relative h-[13.05px]  w-[55.17px]">
                            INT
                          </p>
                          <p className="font-bold relative h-[30px] w-[45px] text-[32px]">
                            {props.atributos.inteligencia}
                          </p>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Arcanismo</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Investigação</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat  h-full '>
                        <div>
                          <p className="text-sm font-bold relative h-[13.05px]  w-[55.17px]">
                            SAB
                          </p>
                          <p className="font-bold relative h-[30px] w-[45px] text-[32px]">
                            {props.atributos.sabedoria}
                          </p>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Intuição</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Medicina</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" bg-no-repeat h-[85px]  flex">
                      <div className='w-[30%] ml-4 mr-2 flex justify-center bg-[url("/retangulozinho.svg")] bg-no-repeat  h-full '>
                        <div className='items-center'>
                          <div>
                            <p className="text-sm font-bold relative h-[13.05px]  w-[55.17px]">
                              CAR
                            </p>
                          </div>
                          <div>
                            <p className="font-bold relative h-[30px] w-[45px] text-[32px]">
                              {props.atributos.carisma}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=' mt-4'>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Enganação</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='rounded-full mr-2  border-black w-[15px] h-[15px] border-2'></div>
                          <p><span className='font-bold'>+2</span> Intimidação</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className=' my-2 h-[100%] ml-[75px]  w-[55%]  ' >
                <div className='h-[100%] w-[100%]  '>
                  <div className='  h-[10%] w-[100%] mt-8 flex items-center justify-center'>
                    <h1 className='font-bold text-2xl uppercase'>{props.nome}</h1>
                  </div>
                  <div className='flex justify-center h-full w-full mt-20 '>
                    <div className='bg-white border-solid border-2 border-black w-[80%] h-[55%]  ' >
                      <div className='flex justify-between  w-full h-full my-20'>
                        <div className='bg-[url("/ca.svg")] bg-no-repeat ml-10 bg-contain w-[25%] h-[50%] flex items-center justify-center'>
                          <span>{props.atributos.classeDeArmadura}</span>
                        </div>
                        <div className='bg-[url("/hp.svg")]  bg-no-repeat mr-10 mt-1 bg-contain w-[25%] h-[50%] flex items-center justify-center'>
                          <span className='mb-5'>{props.atributos.pontosDeVida}</span>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50 cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>

      )}
    </>
  );
}



    // ]