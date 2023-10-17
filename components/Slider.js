import React from 'react'

const Slider = () => {
  return (
    <div>
        <div className="slider">
            <div className="slides">
                <div id="slide-1"><img src="https://picsum.photos/300/300" /></div>
                <div id="slide-2"><img src="https://picsum.photos/301/301" /></div>
                <div id="slide-3"><img src="https://picsum.photos/302/302" /></div>
                <div id="slide-4"><img src="https://picsum.photos/303/303" /></div>
                <div id="slide-5"><img src="https://picsum.photos/304/304" /></div>
                <div id="slide-6"><img src="https://picsum.photos/306/305" /></div>
            </div>
            <span className="scroll_to">
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>
                <a href="#slide-6">6</a>
            </span>
        </div>
    </div>
  )
}

export default Slider