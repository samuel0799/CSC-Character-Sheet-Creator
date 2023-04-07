import FichaModal from "@/components/FichaModal";
import { useState } from "react";

export default function novaficha(){
    
    const [isModalOpen, setIsModalOpen] = useState(false);

   
function handleOpenModal() {
    setIsModalOpen(true);
  }
  
  function handleCloseModal() {
    setIsModalOpen(false);
  }
    return(
        <div>
            <button onClick={handleOpenModal}>Abrir Popup</button>
      {isModalOpen && (
      <FichaModal  
      nome={""} 
      classe={""} 
      nivel={0} 
      raca={""}  
      onClose={handleCloseModal}
      />)}
        </div>
    )
}