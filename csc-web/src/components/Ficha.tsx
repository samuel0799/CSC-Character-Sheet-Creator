interface Props {

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

export default function Ficha(props:Props){


  let bgColor = '';
  switch (props.type) {
    case 'Guerreiro':
      bgColor = 'bg-red-500';
      break;
    case 'Mago':
      bgColor = 'bg-blue-500';
      break;
    case 'Ladino':
      bgColor = 'bg-green-500';
      break;
    default:
      bgColor = 'bg-gray-500';
      break;
  }


return(
    <div className={`${bgColor}`}>
        <h1>{props.nome}</h1>
      <p>Classe: {props.classe}</p>
      <p>Nível: {props.nivel}</p>
      <p>Raça: {props.raca}</p>
    </div>
)
}