import Image from 'next/image'
import logo from '../../public/images/logo.png'
import bgHero from '../../public/images/bg-hero.png'
import seloVerde from '../../public/images/selo-verde.png'

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
          <h2 className='text-5xl font-bold'>Proteja seu negócio com o Seguro de Responsabilidade Civil da Torgansa</h2>
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
        <h2 className='text-4xl text-center font-bold'>O Que é o Seguro de Responsabilidade Civil?</h2>
        <p className='text-base py-5 text-center'>O Seguro de Responsabilidade Civil (RC) é uma proteção essencial para empresas e profissionais que buscam resguardar seu patrimônio contra eventuais danos causados a terceiros durante a execução de suas atividades. Seja por um acidente inesperado, falha operacional ou erro involuntário, este seguro oferece cobertura para indenizações decorrentes de danos materiais, corporais, morais e estéticos.</p>
        <h2 className='text-4xl text-center font-bold'>Principais coberturas</h2>
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

      <section className='flex flex-col items-center bg-white w-full px-40 py-16'>
        <h2 className='text-4xl text-center font-bold'>Como Funciona?</h2>
        <p className='text-base py-5 text-center'>Contratar o Seguro de Responsabilidade Civil da AVLA é um processo simples, transparente e totalmente digital. Abaixo, detalhamos cada etapa para que você saiba exatamente o que esperar:</p>
        <div className='w-full flex gap-5 my-10'>
          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center justify-center bg-primary_black_light w-32 h-32 rounded-t-3xl rounded-l-3xl'>
              <strong className='text-7xl text-primary_green'>1.</strong>
            </div>
            <h3 className='text-2xl py-5 font-bold'>Simulação</h3>
            <p className='text-center'>Preencha um formulário simples com informações sobre sua empresa e o valor desejado para cobertura. Em poucos segundos, você receberá uma cotação personalizada.</p>
          </div>

          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center justify-center bg-primary_black_light w-32 h-32 rounded-t-3xl rounded-l-3xl'>
              <strong className='text-7xl text-primary_green'>2.</strong>
            </div>
            <h3 className='text-2xl py-5 font-bold'>Análise</h3>
            <p className='text-center'>Revise a proposta detalhada, que inclui o valor do prêmio, taxa anual, comissão e validade. Se necessário, ajuste os parâmetros para atender melhor às suas necessidades.</p>
          </div>

          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center justify-center bg-primary_black_light w-32 h-32 rounded-t-3xl rounded-l-3xl'>
              <strong className='text-7xl text-primary_green'>3.</strong>
            </div>
            <h3 className='text-2xl py-5 font-bold'>Contratação</h3>
            <p className='text-center'>Com a proposta aprovada, finalize a contratação de forma 100% online. Realize o pagamento e receba sua apólice digitalmente, com segurança e praticidade.</p>
          </div>

          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center justify-center bg-primary_black_light w-32 h-32 rounded-t-3xl rounded-l-3xl'>
              <strong className='text-7xl text-primary_green'>4.</strong>
            </div>
            <h3 className='text-2xl py-5 font-bold'>Cobertura Ativa</h3>
            <p className='text-center'>A partir da data de início da apólice, sua empresa estará protegida contra danos a terceiros. Em caso de incidente, conte com o suporte da seguradora.</p>
          </div>
        </div>
        <ButtonSimulate />
      </section>

      <footer className='flex w-full flex-col items-center bg-primary_black_light px-40 py-16'>
        <div className='flex w-full'>
          <div className='w-1/5'>
            <Image 
              src={logo}
              alt='logo torgansa'
            />
          </div>
          <div className='w-1/5'>
            <nav className='flex flex-col gap-4'>
            <strong className='text-primary_green'>Quem Somos</strong>
            <ul className='flex flex-col list-none gap-3 text-primary_gray_light'>
              <li><a href="#sobre">Sobre a Torgansa</a></li>
              <li><a href="#beneficios">Sobre o Seguro Civil</a></li>
              <li><a href="#coberturas">Coberturas</a></li>
            </ul>
          </nav>
          </div>
          <div className='w-1/5'>
            <nav className='flex flex-col gap-4'>
            <strong className='text-primary_green'>Quem Somos</strong>
            <ul className='flex flex-col list-none gap-3 text-primary_gray_light'>
              <li><a href="#sobre">Sobre a Torgansa</a></li>
              <li><a href="#beneficios">Sobre o Seguro Civil</a></li>
              <li><a href="#coberturas">Coberturas</a></li>
            </ul>
          </nav>
          </div>
          <div className='w-1/5'>
            <nav className='flex flex-col gap-4'>
            <strong className='text-primary_green'>Quem Somos</strong>
            <ul className='flex flex-col list-none gap-3 text-primary_gray_light'>
              <li><a href="#sobre">Sobre a Torgansa</a></li>
              <li><a href="#beneficios">Sobre o Seguro Civil</a></li>
              <li><a href="#coberturas">Coberturas</a></li>
            </ul>
          </nav>
          </div>
          <div className='w-1/5'>
            <Image 
              src={seloVerde}
              alt='Selo verde torgansa'
            />
          </div>
        </div>
        <p className='text-primary_gray_light mt-8 text-sm'>© 2025 Torgansa. Todos direitos reservados.</p>
      </footer>
    </div>
  );
}
