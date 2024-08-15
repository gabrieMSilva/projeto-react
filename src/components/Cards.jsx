



export function Cards(props){
    return(
        <div className="flex justify-center mt-9 mb-9">
            <div className="w-[315px] h-[457px] bg-slate-100 rounded-lg drop-shadow-xl">
                <img src={props.img} alt="Foto" className='h-[80%] w-full rounded-md '/>
                <div className="flex w-full justify-between p-3">
                     <h1 className="text-blue-900 font-semibold text-lg">{props.cidade}</h1>
                     <h1 className="text-blue-900 font-semibold text-md">{props.valor}</h1>
                </div>
                <div className="flex justify-center">

                    <button className="py-1 px-1 bg-blue-900 rounded-lg text-white  font-light text-sm p-5 w-[50%] ">Comprar</button>
                </div>


            </div>
        </div>
    )
}