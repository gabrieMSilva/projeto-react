



export function ComentsCards(props){
    return(
        <div className="p-4"> 

            <div className="h-[180px] w-[462px] bg-blue-900 p-5">
                <h2 className="font-semibold text-white text-lg">{props.nome}</h2>
                <p className="font-medium text-sm text-white py-2">{props.comentario}</p>
            </div>

        </div>
    )
}