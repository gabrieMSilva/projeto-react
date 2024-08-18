import { Cards } from "./Cards";
import Foto1 from './../assets/foto1.jpg'
import Foto2 from './../assets/foto2.jpg'
import Foto3 from './../assets/foto3.jpg'



export function ContentsCard(){
    return(
       <div>
            <div className="flex flex-col items-center mt-[110px]">                
                <h1 className="py-4 text-2xl text-blue-900 font-bold">Top Destinations</h1>
            </div>

            <Cards img={Foto1} cidade ={"Paris, France"} valor={"$5,42k"} modalCidade={"Paris,France"} modalContent={"Paris é conhecida por sua qualidade de vida elevada e por uma série de aspectos que atraem tanto visitantes quanto residentes. Aqui estão algumas das qualidades que destacam a cidade"}/>
            <Cards img={Foto2} cidade ={"Barcelona, Spain"} valor={"$8,75k"} modalCidade={"Barcelona,Spain"} modalContent={"Barcelona é uma cidade fascinante com uma variedade de qualidades que a tornam um destino popular e uma excelente opção para viver. Aqui estão algumas das principais qualidades de Barcelona"}/>
            <Cards img={Foto3} cidade ={"Lisboa, Portugal"} valor={"$6,35k"} modalCidade={"Lisboa,Portugal"} modalContent={"Lisboa é uma cidade encantadora e vibrante com uma série de qualidades que a tornam um destino atraente para turistas e uma ótima opção para viver. Aqui estão algumas das principais qualidades de Lisboa"}/>
       </div> 
    )
}