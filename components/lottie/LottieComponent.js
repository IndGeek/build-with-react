import React, { useRef } from 'react'
import animationJson from './animation.json'
import Lottie, { useLottie, useLottieInteractivity } from 'lottie-react'

const LottieComponent = () => {
    const ref = useRef(null)
  return (
    <div>
        <Lottie animationData={animationJson} onComplete={()=> {ref.current?.setDirection(-1); ref.current?.play()}} className="w-48" lottieRef={ref} loop={false} autoPlay={true} />
    </div>
  )
}

const InteractiveLottie = () => {
    const options = {
        animationData: animationJson
    }
    const style= {
        height: 350,
    }
    const lottieObject = useLottie(options, style)
    // {console.log(lottieObject, ' lottie Obeject')}

    const animation = useLottieInteractivity({
        lottieObj: lottieObject,
        actions: [{
            visibility: [0.1, 0.8], 
            type: "seek",
            frames: [0, 150]
        }],
        mode: "scroll"
    })

    return animation
  }

export { LottieComponent, InteractiveLottie}