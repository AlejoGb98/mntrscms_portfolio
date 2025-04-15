import React from 'react'
import Link from 'next/link'

const Button = ({text, url}) => {
  return (
      <Link href={url}>
        <button className="text-base cursor-pointer border-2 text-slate-100 border-slate-100 w-fit mx-auto py-2 px-8 rounded-2xl 
                        transition-all duration-150 hover:bg-slate-100 hover:text-gray-900">
                {text}
        </button>  
    </Link>

  )
}

export default Button
