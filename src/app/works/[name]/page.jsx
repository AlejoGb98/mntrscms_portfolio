'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import works from '@/app/works'

import { useParams } from 'next/navigation'


const Work = () => {

  
  
  const {name} = useParams();
  
  const work = works.filter(work => {
    return work.id === name;
  })
  
  console.log(work[0].posts)
  
  
  const {id, nombre, descripcion, posts, historias, logo} = work[0]
  
  
  const [showContent, setShowContent] = useState(posts)

  return (
    <section className='flex flex-col glass items-center rounded-2xl text-slate-100'>
      <div className='flex flex-col items-center py-6 gap-4 mt-12'>
        <Image src={logo} width={400} height={400} className='w-60 h-auto my-2' alt=''/>

        <p className='text-4xl font-bold '>{nombre}</p>
        <p className='text-xl max-w-8/12 text-center'>{descripcion}</p>
      </div>

      <div className=''>
        <div className='w-full flex justify-center gap-12 mb-6'>
          <button className='text-3xl cursor-pointer font-semibold' onClick={() => setShowContent(posts)}>Posts</button>
          <button className='text-3xl cursor-pointer font-semibold' onClick={() => setShowContent(historias)}>Historias</button>
        </div>

        <div className='grid grid-cols-3 justify-items-center px-8 gap-6'>
            {
              showContent.map(image => (
                <Image src={image} width={1000} height={1000} className='w-fit  rounded-lg' alt='Foto' key={image} />
              ))
            }
        </div>
        <p></p>
      </div>

      
    </section>
  )
}

export default Work
