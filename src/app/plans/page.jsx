import React from 'react'
import plansInfo from '@/app/plans.js'
import PlanCard from '../components/PlanCard'

const Plans = () => {
   console.log(plansInfo)
  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center justify-center p-6">
        <div className='flex justify-center gap-4'>
        {plansInfo.map((plan, index) => (
            <PlanCard
                plan={plan}
                key={index}
            />
        ))}
        </div>
    </section>
  )
}

export default Plans
