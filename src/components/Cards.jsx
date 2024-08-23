import { useState } from "react"
import Modal from 'react-modal'
import Vetor from '../assets/Decore.png'

 
Modal.setAppElement('#root');



export function Cards(props){

    const [modal, setModal] = useState(false)

    function openModal(){
        setModal(true)
    }

    function closeModal(){
        setModal(false)
    }
    return(
        <div className="flex justify-center mt-9">
            
           
            <div className="w-[315px] h-[457px] bg-slate-100 rounded-lg drop-shadow-2xl hover:scale-110 duration-150">
                <img src={props.img} alt="Foto" className='h-[80%] w-full rounded-md '/>
                <div className="flex w-full justify-between p-3">
                     <h1 className="text-blue-900 font-semibold text-lg">{props.cidade}</h1>
                     <h1 className="text-blue-900 font-semibold text-md">{props.valor}</h1>
                </div>
               
                <div className="flex justify-center">
                    <button onClick={openModal} className="py-1 px-3 bg-orange-500 rounded-md text-white font-semibold drop-shadow-md">More</button>
                        <Modal 
                            isOpen={modal}
                            onRequestClose={closeModal} 
                            contentLabel="Example Modal"
                            className="bg-blue-900 w-[90%] h-[80%] z-10 px-10 py-5 mt-10 flex justify-center ml-10 flex-col rounded-md md:xl:h-[50%] md:xl:w-[50%] md:xl:mt-60 md:xl:ml-[25%]"
                            
                        >
                            
                            <h1 className="font-semibold text-lg text-white">{props.modalCidade}</h1>
                            <h3 className="py-5 font-medium text-sm text-white">{props.modalContent}</h3>
                            
                            <button className="py-3 px-2 bg-orange-500 rounded-md text-white font-semibold text-sm mt-11" onClick={closeModal}>Close modal</button>
                        </Modal>               
                </div>
                
             </div>
        </div>
    )
}