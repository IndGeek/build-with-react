import React from 'react'
import Lottie, { useLottie, useLottieInteractivity } from 'lottie-react'
import animationJSON from './animation.json' // heavy size so avoid using multiple lotties in a single page
import { useRef } from "react"

// show lottiefiles.com for all the animations

const LottieAnimation = () => {
    const lottieRef = useRef(null)
    // show type LottieOptions from index.d.ts of lottie
    // show functions performable on lottieRef from index.d.ts
    // show onComplete
    return <Lottie onComplete={() => {lottieRef.current?.setDirection(-1); lottieRef.current?.play()}} className="w-1/2 h-1/2" lottieRef={lottieRef} animationData={animationJSON} loop={false} autoplay={true} />
}



const InteractiveLottie = () => {
    const options = {
        animationData: animationJSON
    }
    const style = {
        height: 350
    }
    const lottieObj = useLottie(options, style);
    const animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [{
            visibility: [0.1, 0.9],
            type: "seek",
            frames: [0, 150]
        }]
    })
    return animation
}

export {LottieAnimation, InteractiveLottie}