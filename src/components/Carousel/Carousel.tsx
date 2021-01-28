import Glide from '@glidejs/glide'
import { useState, useEffect, cloneElement } from 'react'

const Carousel = ({element = 'glide', options, children}) => {
    const [slider] = useState(new Glide(`.${element}`, options))
    useEffect(() => {
        slider.mount()
        // subscribe to an event
        // slider.on('run.before', (event) => {
        //     // ... do something cool here
        // })
        return () => slider.destroy()
    }, [])

    return (
        <div className={element} style={{ overflowX: 'hidden', userSelect: 'none', maxWidth: '100vw' }}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides" style={{ display: 'flex', margin: '0 auto', padding: '0', cursor: 'pointer' }}>
                    {children.map((slide, index) => {
                        return cloneElement(slide, {
                            key: index,
                            className: `${slide.props.className} glide__slide`
                        })
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Carousel;