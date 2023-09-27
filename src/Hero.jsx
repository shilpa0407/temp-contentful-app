import React from 'react'
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Magnam labore in quo
                      iure reiciendis ipsum. Et, explicabo 
                      neque. Pariatur, voluptatum. Nemo 
                      ipsum quam quae sed assumenda 
                    molestiae cumque nisi dicta.</p>
            </div>
            <div className='img-container'><img src={heroImg} alt="womnen and browser" className='img'></img></div>

        </div>

    </section>
  )
}

export default Hero