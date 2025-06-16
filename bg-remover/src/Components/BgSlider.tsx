import React, { useState } from "react"
import { assets } from "../assets/assets"

const BgSlider = () => {

  const [currentPostion, setCurrentPostion] = useState(50);

  const handleCurrentPostion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPostion(+e.target.value);
  }

  return (
    <div className="bgSlider" >
      <div>
        <img src={assets.image_w_bg} alt="with img" style={{ clipPath: `inset(0 ${100.2 - currentPostion}% 0 0` }} className="with-bg-img" />
      </div>
      <div>
        <img src={assets.image_wo_bg} alt="without img" style={{ clipPath: `inset(0 0 0 ${currentPostion}% ` }} className="without-bg-img" />
      </div>
      <div>
        <input type="range" min={0} max={100} value={currentPostion} onChange={handleCurrentPostion} className="slider" />
      </div>
    </div>
  )
}

export default BgSlider