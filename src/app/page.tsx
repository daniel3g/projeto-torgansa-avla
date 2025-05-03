import Image from 'next/image'
import logo from '../../public/images/logo.png'
import bgHero from '../../public/images/bg-hero.png'

import ButtonSimulate from '@/components/ButtonSimulate';

export default function Home() {
  return (
    <div>
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
        <ButtonSimulate />
      </header>
      <div className='flex w-full p-24'>
        <div className='flex-col w-1/2 px-24'>
          <h2 className='text-5xl'>Proteja seu negócio com o Seguro de Responsabilidade Civil da Torgansa</h2>
          <h3 className='text-xl py-5'>Cobertura completa para danos a terceiros, com contratação 100% online.</h3>
          <ButtonSimulate />
        </div>
        <div className='flex w-1/2'>
          <Image
          src={bgHero}
          alt="Bg Hero"
          />
        </div>
      </div>

      <section className='flex-row bg-primary_gray_light w-full px-40 py-16'> 
        <h2 className='text-4xl text-center'>O Que é o Seguro de Responsabilidade Civil?</h2>
        <p className='text-base py-5 text-center'>O Seguro de Responsabilidade Civil (RC) é uma proteção essencial para empresas e profissionais que buscam resguardar seu patrimônio contra eventuais danos causados a terceiros durante a execução de suas atividades. Seja por um acidente inesperado, falha operacional ou erro involuntário, este seguro oferece cobertura para indenizações decorrentes de danos materiais, corporais, morais e estéticos.</p>
        <h2 className='text-4xl text-center'>Principais coberturas</h2>
      </section>
    </div>
  );
}
