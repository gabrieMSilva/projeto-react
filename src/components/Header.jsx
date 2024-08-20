import Logo from '../assets/Logo.png'
export function Header(){
    return(
         <div className='h-[100px] w-[100%] bg-white fixed top-0 right-0 left-0 z-10 drop-shadow-xl md:xl:px-[24rem] md:xl:py-5 '>
            <div className='flex justify-between p-3'>
             <img src={Logo} alt="Logo" className='cursor-pointer'/>
                <ul className='flex gap-4 items-end '>
                    <li className='text-base  hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Destination</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Hotels</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Flights</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer '>Login</li>
                </ul>
            </div>
         </div>
    )
}