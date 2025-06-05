import Image from 'next/image'
import logo from '../../public/images/logo.png'
import bgHero from '../../public/images/bg-hero.png'

import { LiaHouseDamageSolid } from "react-icons/lia";
import { MdOutlineHeartBroken } from "react-icons/md";


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

      <section className='flex flex-col items-center bg-primary_gray_light w-full px-40 py-16'> 
        <h2 className='text-4xl text-center'>O Que é o Seguro de Responsabilidade Civil?</h2>
        <p className='text-base py-5 text-center'>O Seguro de Responsabilidade Civil (RC) é uma proteção essencial para empresas e profissionais que buscam resguardar seu patrimônio contra eventuais danos causados a terceiros durante a execução de suas atividades. Seja por um acidente inesperado, falha operacional ou erro involuntário, este seguro oferece cobertura para indenizações decorrentes de danos materiais, corporais, morais e estéticos.</p>
        <h2 className='text-4xl text-center'>Principais coberturas</h2>
        <div className='flex gap-10 justify-center my-10'>
          <div className='flex flex-col bg-white w-1/3 p-10 rounded-xl'>
            <div className='flex items-center gap-3 mb-5'>
              <LiaHouseDamageSolid className='text-6xl' />
              <h2 className='text-2xl'>Danos Materiais</h2>
            </div>
            <p>Cobre prejuízos causados a propriedades de terceiros, como equipamentos, instalações ou bens danificados durante a prestação de serviços.</p>
          </div>

          <div className='flex flex-col bg-white w-1/3 p-10 rounded-xl'>
            <div className='flex items-center gap-3 mb-5'>
              <MdOutlineHeartBroken className='text-6xl' />
              <h2 className='text-2xl'>Danos Corporais</h2>
            </div>
            <p>Garante indenizações por lesões físicas acidentais causadas a terceiros, como clientes ou visitantes, dentro ou fora das dependências da empresa.</p>
          </div>
        </div>

        <div className='flex gap-10 justify-center my-10'>
          <div className='flex flex-col bg-white w-1/3 p-10 rounded-xl'>
            <div className='flex items-center gap-3 mb-5'>
              <LiaHouseDamageSolid className='text-6xl' />
              <h2 className='text-2xl'>Danos Morais</h2>
            </div>
            <p>Abrange situações que resultem em ofensas à honra, reputação ou imagem de terceiros, mesmo que não haja dano físico ou material.​</p>
          </div>

          <div className='flex flex-col bg-white w-1/3 p-10 rounded-xl'>
            <div className='flex items-center gap-3 mb-5'>
              <LiaHouseDamageSolid className='text-6xl' />
              <h2 className='text-2xl'>Danos Estéticos</h2>
            </div>
            <p>Oferece cobertura para alterações permanentes na aparência de uma pessoa, decorrentes de acidentes pelos quais a empresa seja responsabilizada.​</p>
          </div>
        </div>
        <ButtonSimulate />
      </section>

      <section className='flex flex-col items-center bg-primary_gray_light w-full px-40 py-16'>
        <h2 className='text-4xl text-center'>Como Funciona?</h2>
        <p className='text-base py-5 text-center'>Contratar o Seguro de Responsabilidade Civil da AVLA é um processo simples, transparente e totalmente digital. Abaixo, detalhamos cada etapa para que você saiba exatamente o que esperar:</p>
        <div>
          <div className='w-1/4'>
            <div className='bg-slate-900 rounded-t-3xl'>
              <strong>1.</strong>
            </div>
          </div>
          <div className='w-1/4'></div>
          <div className='w-1/4'></div>
          <div className='w-1/4'></div>
        </div>
      </section>
    </div>
  );
}
