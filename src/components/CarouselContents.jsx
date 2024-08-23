import { Carousel } from "./Carousel";


export function CarouselContents(){
    return(
        <div className='mt-10 p-3'>
            <div className="md:xl:flex md:xl:gap-[18rem] md:xl:px-[24rem] md:xl:mt-10 md:xl:items-center ">
                <h1 className="text-blue-950 text-5xl font-bold mb-10 mt-[110px] font-serif min-w-80">What people say <br />about Us.</h1>
                <Carousel/>
            </div>
        </div>
    )
}