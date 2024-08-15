import { Cards } from "./Cards";
import Foto1 from './../assets/foto1.jpg'
import Foto2 from './../assets/foto2.jpg'
import Foto3 from './../assets/foto3.jpg'



export function Carousel(){
    return(
       <div>
            <div className="flex flex-col items-center mt-[110px]">                
                <h1 className="py-4 text-2xl text-blue-900 font-bold">Top Destinations</h1>
            </div>

            <Cards img={Foto1} cidade ={"Paris, France"} valor={"$5,42k"}/>
            <Cards img={Foto2} cidade ={"Barcelona, Spain"} valor={"$8,75k"}/>
            <Cards img={Foto3} cidade ={"Lisboa, Portugal"} valor={"$6,35k"}/>
       </div> 
    )
}