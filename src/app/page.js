'use client'
import Image from "next/image";
import Character from '../../public/mntrscms_character.png'
import "./globals.css";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

import PlanCard from "./components/PlanCard";
import PersonalPlan from "./components/PersonalPlan";
import WorksCard from './components/WorksCard';
import Button from "./components/Button";

import works from './works'
import plansInfo from "./plans";


export default function Home() {



  return (
    <section className="">
      <div className="min-h-screen flex flex-col items-center justify-center pb-12 overscroll-auto">
        
        <div className="flex flex-1 gap-6 justify-center items-center glass w-full">
          <Image src={Character} height={1000} width={1000} className="w-60 h-60" alt="Rafael Silveira cartoon saludando y sonriendo."/>

          <div className="h-fit">
            
            <h1 className="text-7xl font-semibold text-slate-100 font-oswald">Rafael Silveira</h1>
            <p className='text-3xl min-h-12 text-slate-100 pl-1'>
              <Typewriter words={['Diseñador Gráfico', 'Diseñador Web', 'Fotógrafo']} loop={Infinity} />
            </p>
          </div> 
        </div>

      </div>

      <div className="font-oswald grid grid-cols-2 justify-items-center w-full items-center py-24 text-xl gap-12 text-slate-100">
        <p className="text-6xl w-72">
          <span className="font-bold">Diseño Gráfico</span>, de <span className="font-bold"> Marca</span>, <span className="font-bold">Web</span> & <span className="font-bold">Redes Sociales</span>
        </p>

        <div className="text-xl flex flex-col w-lg gap-6 tracking-wide">
          <p>
            Un buen diseño es clave para que tu marca se conecte automaticamente con tu público. Mas allá de la estética, transmite tu mensaje
            de forma clara y genera la confianza necesaria para que tu marca ea reconocida.
          </p>
          <p>
            Una imagen sólida y coherente facilita la relación con quienes te buscan y te permite destacar en el mercado.
          </p>

          <Button 
            text={'Trabajemos juntos :)'} 
            url={'/plans'}
          />
            
        </div>
      </div>

      <section className="flex flex-col items-center">
        <h2 className="text-[4rem] text-slate-100 font-semibold mb-5">Proyectos</h2>

        <div className="flex justify-center gap-8 w-full py-4 px-8">
          {
            works.map((work, index) => (
              <WorksCard
                key={index}
                work={work}
              />
            ))
          }
        </div>

      </section>
    
      <section className="flex flex-col items-center justify-center py-6 rounded-3xl">
        <h2 className="text-[4rem] text-zinc-900 font-semibold tracking-wide">Membresias</h2>
        <div className='flex justify-center gap-4'>
          {plansInfo.map((plan, index) => (
              <PlanCard
                  plan={plan}
                  key={index}
              />
          ))}
          <PersonalPlan/>
        </div>
      </section>

     

    </section>
  );
}
