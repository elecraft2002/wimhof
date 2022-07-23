import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import "./parallax.css"
import image1 from "../../../assets/images/parallax/parallax-1.png"
import image2 from "../../../assets/images/parallax/parallax-2.png"
import image3 from "../../../assets/images/parallax/parallax-3.png"
import image4 from "../../../assets/images/parallax/parallax-4.png"
import image5 from "../../../assets/images/parallax/parallax-5.png"
import image6 from "../../../assets/images/parallax/parallax-6.png"
import Heading from '../heading'

export default function parallaxScene() {
  return (
    <ParallaxProvider>
      <div className='parallax'>
        <Parallax className='parallax__image__container' speed={-200}>
          <img style={{ objectPosition: "20%" }} className='parallax__image' src={image6} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-40}>
          <img className='parallax__image' src={image5} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-30}>
          <img className='parallax__image' src={image4} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-20}>
          <img className='parallax__image' src={image3} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-20}>
          <Heading />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-15}>
          <img className='parallax__image' src={image2} />
        </Parallax>
        <Parallax className='parallax__image__container'>
          <img style={{ objectPosition: "30%" }} className='parallax__image' src={image1} />
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}
