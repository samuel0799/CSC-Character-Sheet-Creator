import Image from 'next/image'
import { FormEvent, useState } from "react"
import { useRouter } from 'next/router'

import { api } from "@/lib/axios";

import logoImg from '../assets/cscLogo.svg'
import dadoIcon from '../assets/icons/dadoLogin.svg'
import blackLogo from '../assets/blackCscLogo.svg'

export default function login(){

const[email,setEmail] = useState("")
const[senha,setSenha] = useState("")
const[submit,setSubmit] = useState("")

const router = useRouter();

function voltar(){
router.push('/')
}

async function login(event:FormEvent) {
  event.preventDefault()

  try{
    const response = await api.post("usuarios/login",{
      email: email,
      senha: senha,

    })
    if(response.status===200){
      router.push(`/homepage?token=${encodeURIComponent((response.data.id))}&username=${encodeURIComponent((response.data.nome))}`)
      setEmail("")
      setSenha("")
    }else{
      throw new Error("Falha ao realizar login, email e/ou senha incorretos")
    }

    

    console.log(response.data.id)
    console.log(response.status)
  }catch(error){
    console.log(error)
    alert("Falha ao realizar login, email e/ou senha incorretos")
  }
} 





  return (
    
    <div className= "bg-background-login bg-cover bg-center bg-no-repeat h-screen sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover overflow-y-hidden">
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-black h-screen '>
      <a className='text-red-700 text-xl' href="/">inicio</a>
      <Image className='mt-8 mx-7' src={logoImg} alt=''/>
      <Image className='my-28 mx-12' src={dadoIcon} alt=''/>
      <button className='bg-black mt-16 mb-2 mx-12 border-white border-4 rounded-full '
      onClick={voltar}>
        <span className='text-white text-[24px] mx-6'>VOLTAR</span>
      </button>
      </div>
      <div className='bg-white bg-opacity-60 backdrop-blur-[8px] w-4/6 justify-center  flex flex-wrap flex-col text-center items-center '>
        <Image className='mt-14 mb-20 ' src={blackLogo} alt=''/>
        <form className=' mb-40 ' onSubmit={login}>
            <div className='justify-center flex flex-wrap flex-col text-center items-center'>
              <label htmlFor="">EMAIL</label>
              <input className=' bg-[#EAEAEA] py-8 px-16 shadow-lg my-5'
              onChange={event=> setEmail(event.target.value)}
              type="email" />
              <br />
              <label htmlFor="">SENHA</label>
              <input className='bg-[#EAEAEA] shadow-lg  py-8 px-16 my-5'
              onChange={event=> setSenha(event.target.value)}
              type="password" />
              <button className='bg-black border-white border-4 mt-16 rounded-full'
              >
                <span className='text-white text-[24px] mx-6'>ENTRAR</span></button>
            </div>
     
        </form>
      </div>  
    </div>
    </div>
    )}
 
