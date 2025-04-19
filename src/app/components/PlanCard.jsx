import Check from '../../../public/check.png'
import LeftArrow from '../../../public/arrow.png'
import Info from '../../../public/info.png'
import Image from 'next/image'

const PlanCard = ({plan}) => {
    const planBorders = {
        Básico: 'border-gray-300',
        Plus: 'border-green-400',
        Premium: 'border-amber-300'
    }

    const plansBgs = {
        Básico: 'bg-gray-300',
        Plus: 'bg-green-400',
        Premium: 'bg-amber-300'
    }

  return (
    <div className={`flex flex-col bg-slate-50 rounded-3xl border-[2px] py-4 px-8 overflow-hidden max-w-[28rem]`}>
       
            <h2 className={`text-3xl py-2 font-semibold`}>{plan.nombre}</h2>
            <div className="py-1 min-h-20">
                <p>{plan.descripcion}</p>
            </div>
            
            <div className="py-1 min-h-20">
                <div className='flex gap-2 items-center'>
                    <p className="text-neutral-400 text-2xl font-bold line-through">${plan.precioOriginal}/mes</p>
                    <p className="text-black text-3xl font-bold">${plan.precio}<span className='text-lg'>/mes</span></p>
                </div>
                <p className="text-sm text-gray-400 ">*15% de descuento en el primer mes para nuevos usuarios</p>
            </div>

            <button className='text-slate-100 text-xl tracking-wider py-3 my-3 px-6 bg-black rounded-4xl border-[1px]
                                transition-all duration-200 hover:scale-105 cursor-pointer'>
                Suscribirme
            </button>
     
            <div className="py-3 flex flex-col gap-2 min-h-48">
                {
                    plan.contenido.map((item, index) => (
                        <div className='flex items-center gap-2' key={index}>
                            <div className='place-self-start py-1'>
                                <Image src={Check} height={200} width={200} className='w-4 h-4' alt='check list image'/>
                            </div>
                            <p>{item}</p>
                        </div>
                        )
                    )
                }

                <div className='flex items-center gap-2'>
                    <div className='place-self-start py-1'>
                        <Image src={Info} height={200} width={200} className='w-4 h-4' alt='check list image'/>
                    </div>
                    <p>Cancela tu plan en cualquier momento.</p>
                </div>

            </div>
            
            <div className=''>
                <p className='font-semibold text-lg'>Servicios incluidos</p>
                <div className='flex flex-wrap gap-2 py-2'>
                    {
                        plan.services.map((item, index) => (
                            <div key={index} className='w-fit border-[1px] border-black py-1 px-2 rounded-3xl'>
                                <p className='text-sm'>{item}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

    </div>


  )
}

export default PlanCard
