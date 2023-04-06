
import Image from 'next/image'
import logoImg from '../assets/cscLogo.svg'


import{api} from '../lib/axios'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router';
 
export default function Home() {

  const [nome, setnome] = useState('');
  const [email,setEmail] = useState('')
  const [senha, setsenha] = useState('');

  // const [submit,setSubmit] = useState(false);
  const router = useRouter()

  function irParaLogin(){
    router.push('/login')
  }


  async function cadastrar(event: FormEvent){
    event.preventDefault()


    try {
       const response = await api.post("/usuarios/cadastrar",{
            nome: nome,
            email: email,
            senha: senha
        });
        
        if(response.status===201){

        alert("Usuario criado com sucesso!")

        setEmail("")
        setnome("")
        setsenha("")

        router.push('/login')
        }else{
          throw new Error("Falha ao cadastrar")
        }
      
        

    } catch (error) {
        console.log(error)
        alert("falha ao criar usuario")
    }

  }
  return(
      <div className= "bg-background-login bg-cover bg-center bg-no-repeat h-screen sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover overflow-y-hidden">
           <div className='flex h-screen justify-center items-center'>
              <div className='bg-black h-screen justify-center items-center '>
              <Image className='mt-8 mb-40 mx-12' src={logoImg} alt=''/>
              <div className='mt-11 mx-12 text-center'>
              <h1 className='text-white font-bold text-3xl leading-10 text-justify'>Bem-Vindo<br></br>de Volta!</h1>
              <p className='text-white text-xl mt-16 text-justify '>Acesse sua conta<br></br> agora mesmo</p>
               <button className='bg-black border-white border-4 mt-16 rounded-full'
               onClick={irParaLogin}>
              <span className='text-white text-[24px] mx-6'>ENTRAR</span></button>
              </div>
              </div>

              <div className='bg-white bg-opacity-60 backdrop-blur-[8px] h-screen w-4/6 justify-center items-center text-center'>
                  <h1 className='text-black font-bold text-4xl mt-24'>Crie Sua Conta</h1>
                  <p className='text-[#999999] font-bold'>Preencha seus dados</p>
                      <form onSubmit={cadastrar}>
                          <div className='justify-center flex flex-wrap flex-col text-center items-center'>
                              <label htmlFor="">NOME</label>
                              <input className=' bg-[#EAEAEA] py-8 px-16 shadow-lg my-5'
                               onChange={event => setnome(event.target.value)}
                               value={nome}
                              type="text" />
                              <label htmlFor="">EMAIL</label>
                              <input className='bg-[#EAEAEA] shadow-lg  py-8 px-16 my-5'  
                              onChange={event => setEmail(event.target.value)}
                              value={email}
                              type="email" />
                              <label htmlFor="">SENHA</label>
                              <input className='bg-[#EAEAEA] shadow-lg  py-8 px-16 my-5'  
                              onChange={event => setsenha(event.target.value)}
                              value={senha}
                              type="password" />
                              <button className='bg-black border-white border-4 mt-16 rounded-full'>
                                  <span className='text-white text-[32px] mx-6'>CADASTRAR</span></button>
                          </div>
                      </form>
                  </div>
              </div>
           </div>
              
)
}




  
    
    // <div>
    // <div className="flex px-40 py-40 justify-center  items-center">
    //   <div className="bg-black w-1/3 ">
    //   <Image src={logoImg} alt=''/>
    //   <Image src={dadoIcon} alt=''/>
    //   <button className='bg-black text-white border-white rounded-full border-4  w-fit h-fit'> Voltar </button>
    //   </div>
    //   <div className='bg-gray-500 hflex w-4/6 '>
    //     <form >
    //       <label>Email:</label>
    //       <input className=' block py-3 px-6' type="email"  />
    //       <label>Senha:</label>
    //       <input className=' block py-3 px-6' type="password"  />
    //     </form>
    //   </div>
    // </div>
    // </div>
    // export const getServerSideProps = async () => {
      //   const response = await fetch('http://localhost:8080/usuarios') 
      //   const data = await response.json()

//   return {
//     props: {
//       users: data,
//     }
//   }
// }
