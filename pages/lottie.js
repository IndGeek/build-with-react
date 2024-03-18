import { LottieAnimation, InteractiveLottie } from '@/components/lottie/LottieAnimation'
import React from 'react'

const Lottie = () => {
  return (
    <div className='h-[1000px] w-full flex justify-center items-center bg-gray-950'>
        {/* <LottieAnimation /> */}
        <InteractiveLottie />
    </div>
  )
}

export default Lottie