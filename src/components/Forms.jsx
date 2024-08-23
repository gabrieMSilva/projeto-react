



import { useState } from 'react';
import emailjs from '@emailjs/browser'

export function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

    function sendEmail(e){

        e.preventDefault()
        if(name == "" || email == "" || message == ""){
            alert('preecha todos os campos')
            return;
        }
        
        const templateParams = {
            from_name : name,
            email : email,
            message: message,
        }
        emailjs.send("service_unxeb19" , "template_yjme06b" , templateParams , "oIKVi5Xr6Nwf2eWjt")
        .then((res) => {
            console.log("deu certo" , res.status , res.text)
            setEmail("")
            setMessage("")
            setName("")
        }, (err) => {
            console.log(err)
        })  
    }
  
  return (

    <div className='mt-5 justify-center flex md:xl:mt-20 md:xl:mb-10 mb-10'>

    <div className="flex flex-col mt-5 p-5 gap-4 items-center w-[425px] h-[490px] bg-indigo-100 rounded-lg md:xl:w-[80%]">
      <h1 className="text-2xl font-bold text-gray-700 py-3">Subscribe to get information, latest news and other
      interesting offers about Cobham</h1>

      <form className="flex flex-col gap-4 md:xl:w-[1280px]" onSubmit={sendEmail}>
        <input 
          className="py-4 px-2 rounded-md"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="py-4 px-2 rounded-md"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="py-4 px-2 rounded-md"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className=" cursor-pointer mt-3 py-0.5 px-1 bg-orange-500 rounded-md text-white font-semibold text-lg" type="submit" value="Enviar" />
      </form>

    </div>

    </div>
  );
}

