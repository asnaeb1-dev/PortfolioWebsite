import React, { useRef } from 'react'
import ParticleCanvas from './ParticleCanvas';

const BackgroundParticles = () => {
    const parentRef = useRef(null);
    return (
        <div ref={parentRef} className='w-full absolute inset-0 z-[-1] top-20'>
            <ParticleCanvas parentRef={parentRef} />
        </div>  
    )
}

  
export default BackgroundParticles