import { LottieComponent, InteractiveLottie} from '@/components/lottie/LottieComponent'
import React from 'react'

const lottie = () => {
  return (
    <div className='h-[1200px] w-full flex justify-center items-center bg-gray-900'>
        {/* <LottieComponent /> */}
        <InteractiveLottie />
    </div>
  )
}

export default lottie