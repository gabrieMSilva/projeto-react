import Logo from '../assets/Logo.png'
export function Header(){
    return(
         <div>
            <div className='flex mt-3 justify-between p-3'>
             <img src={Logo} alt="Logo" />
                <ul className='flex gap-4 items-center'>
                    <li className='text-base'>Destination</li>
                    <li className='text-base'>Hotels</li>
                    <li className='text-base'>Flights</li>
                    <li className='text-base py-2 px-3 bg-black text-white rounded-md'>Login</li>
            </ul>
            </div>
         </div>
    )
}