import Viajante from '../assets/Viajante1.png'


export function Main(){
    return(
        <div className="mt-[130px] p-3">
            <div className='flex flex-row-reverse justify-center items-center md:xl:px-[24rem] gap-2'>
                <img src={Viajante} alt="Viajante" className='md:sm:flex hidden'/>

                <div>

                    <h3 className="text-orange-500 font-bold text-lg md:xl:text-xl" >Best Destinations around the world</h3>

                    <h2 className="py-3 font-bold text-blue-950 text-7xl font-serif min-w-96">Travel, enjoy and live a new and full life</h2>


                    
                    <p className="font-semibold text-lg mt-8 mb-8 text-gray-400 md:xl:text-xl">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className="flex gap-5">
                        <button className="py-3 px-3 bg-orange-500 text-white rounded-lg mt-2">Find More</button>
                        <button className="py-3 px-3 bg-blue-900 text-white rounded-lg mt-2">Contact Us</button>

                    </div>
                </div>

            </div>
        </div>
    )
}