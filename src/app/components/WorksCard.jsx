import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'

import imagen from '/public/assets/cristina_garcia/01.png'


const WorksCard = ({work}) => {

    const {id, nombre, concepto, images, logo} = work;
    

  return (
    <div className='flex flex-col items-center glass w-84 min-h-64 py-6 px-6 gap-6'>
      
      <Image src={logo} className='w-auto h-28' width={400} height={400} alt='Imagen'/>

      <div className='flex flex-col items-center'>
        <p className="text-slate-100 text-2xl font-semibold">{nombre}</p>
        <p className='text-slate-200 text-xl mb-4'>{concepto}</p>

        <Button
          text={'Ver más'}
          url={`/works/${id}`}
        />
      </div>

    </div>
  )
}

export default WorksCard
