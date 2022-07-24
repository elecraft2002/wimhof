import React, { useRef } from 'react'
import { Parallax, ParallaxProvider, useParallaxController, ParallaxBanner } from 'react-scroll-parallax'
import "./parallax.css"
import image1 from "../../../assets/images/parallax/parallax-1.png"
import image2 from "../../../assets/images/parallax/parallax-2.png"
import image3 from "../../../assets/images/parallax/parallax-3.png"
import image4 from "../../../assets/images/parallax/parallax-4.png"
import image5 from "../../../assets/images/parallax/parallax-5.png"
import image6 from "../../../assets/images/parallax/parallax-6.png"
import Heading from '../Heading'
import Button from '../../../components/button/Button'
import Fade from 'react-reveal/Fade';

export default function ParallaxScene() {
  const parallaxImage6 = {
    children: <div className='parallax__image__container'><img alt='mountains' style={{ objectPosition: "20%" }} className='parallax__image' src={image6} /></div>,
    translateY: [0, 90],
  };
  const parallaxImage5 = {
    children: <div className='parallax__image__container'><img alt='mountains' className='parallax__image' src={image5} /></div>
    ,
    translateY: [-10, 80],
  };
  const parallaxImage4 = {
    children: <div className='parallax__image__container'><img alt='mountains' className='parallax__image' src={image4} /></div>
    ,
    translateY: [0, 70],
  };
  const parallaxImage3 = {
    children: <div className='parallax__image__container'><img alt='mountains' className='parallax__image' src={image3} /></div>
    ,
    translateY: [6, 60],
  };
  const parallaxHeading = {
    children: <div className='parallax__image__container'><Heading /></div>
    ,
    translateY: [0, 90],
  };
  const parallaxImage2 = {
    children: <div className='parallax__image__container'><img alt='mountains' className='parallax__image' src={image2} /></div>
    ,
    translateY: [6, 50],
  };
  const parallaxImage1 = {
    children: <div className='parallax__image__container'><img style={{ objectPosition: "40%" }} alt='mountains' className='parallax__image' src={image1} /></div>
    ,
    translateY: [0, 0],
  };
  const parallaxButton = {
    children: <div className='parallax__image__container'><Button style={{ bottom: "5vw", left: "50%", position: "absolute", transform: "translate(-50%)" }} >Objednat kurz</Button></div>
    ,
    translateY: [0, -5],
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner className='parallax' layers={[parallaxImage6, parallaxImage5, parallaxImage4, parallaxImage3, parallaxHeading, parallaxImage2, parallaxImage1, parallaxButton]}>

      </ParallaxBanner>
    </ParallaxProvider>
  )

  return (
    <ParallaxProvider>
      <div className='parallax'>
        <Parallax className='parallax__image__container' speed={-1000}>
          <img alt='mountains' style={{ objectPosition: "20%" }} className='parallax__image' src={image6} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-300}>
          <img alt='mountains' className='parallax__image' src={image5} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-100}>
          <img alt='mountains' className='parallax__image' src={image4} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-50}>
          <img alt='mountains' className='parallax__image' src={image3} />
        </Parallax>
        <Parallax className='parallax__image__container' speed={-300}>
          <Fade right><Heading /></Fade>
        </Parallax>
        <Parallax className='parallax__image__container' speed={-30}>
          <img alt='mountains' className='parallax__image' src={image2} />
        </Parallax>
        <Parallax className='parallax__image__container'>
          <img alt='mountains' style={{ objectPosition: "40%" }} className='parallax__image' src={image1} />
        </Parallax>
        <Parallax className='parallax__image__container'>

          <Button style={{ bottom: "5vw", left: "50%", position: "absolute", transform: "translate(-50%)" }} >Ahoj</Button>

        </Parallax>
      </div>
    </ParallaxProvider>
  )
}
