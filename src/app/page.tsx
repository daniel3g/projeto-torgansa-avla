import Image from 'next/image'
import logo from '../../public/images/logo.png'

export default function Home() {
  return (
    <header className='flex items-center bg-primary_black_light py-5 px-14 w-full'>
      <div className='w-1/2'>
        <Image
        src={logo}
        alt="Logo Torgansa"
        />
      </div>
      <nav className='flex w-1/2'>
        <ul className='flex list-none gap-8 text-primary_gray_light'>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#coberturas">Coberturas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button className='bg-primary_green w-40 h-10 rounded-3xl'>
        Simule Agora
      </button>
    </header>
  );
}
