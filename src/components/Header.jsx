import Logo from '../assets/Logo.png'
export function Header(){
    return(
         <div>
            <div className='flex justify-between p-3'>
             <img src={Logo} alt="Logo" />
                <ul className='flex gap-4 items-end '>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Destination</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Hotels</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer'>Flights</li>
                    <li className='text-base hover:text-white hover:py-1 hover:px-2  hover:bg-blue-900 rounded-md duration-150 cursor-pointer '>Login</li>
            </ul>
            </div>
         </div>
    )
}