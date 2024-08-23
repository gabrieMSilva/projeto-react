



export function ComentsCards(props){
    return(
        <div className="p-4"> 

            <div className="h-[180px] w-[462px] drop-shadow-xl bg-white justify-center rounded-md px-1 cursor-grab flex flex-col-reverse">
                <h2 className="font-semibold text-slate-400 text-md">{props.nome}</h2>
                <p className="font-medium text-sm text-black py-2 ">{props.comentario}</p>
            </div>

        </div>
    )
}