import React, {useState, useEffect} from 'react';


const EffectCleanUp = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div>
            <h1>useEffect Clean Up</h1>
            <h1>{width}</h1>
        </div>
        
    )
}

export default EffectCleanUp 