import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <ul className='flex absolute font-medium font-oswald z-10 px-14 gap-6 text-xl top-12 text-slate-100'>
        <Link href={'/'}><li>Inicio</li> </Link>
        <Link href={'/works'}><li>Mis trabajos</li></Link>
        <Link href={'/plans'}><li>Planes</li></Link>
        <Link href={'/work-together'}><li>Trabajemos juntos</li></Link>
      </ul>
    </>
  )
}

export default Navbar
