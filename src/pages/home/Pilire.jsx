import React from 'react'
import "./pilire.css"
import topWave from "../../assets/svgs/wave.svg"
import downWave from "../../assets/svgs/wave_down.svg"
import breathing from "../../assets/images/pilire/breathing-with-wim-hof-method.png"
import cold from "../../assets/images/pilire/cold-therapy-wim-hof-method.png"
import commitment from "../../assets/images/pilire/commitment-with-wim-hof-method.png"
import { Fade } from 'react-reveal'
import Button from '../../components/button/button.jsx'
export default function Pilire({ data }) {
    return (
        <section className='pilire__container'>
            <img className='pilire__wave' src={topWave} alt="wave" />
            <div className='pilire'>
                <Fade top delay={300}><h2 id='facts'>{data["3_pilire_wim_hofovy_metody"][0].text}</h2></Fade>
                <div className='pilire__list'>
                    <Fade left delay={500}>
                        <div className='pilir'>
                            <figure style={{ animationDelay: 0 }} className='pilire__img__container'><img src={breathing} alt="commitment" /></figure>
                            <p>
                                <h3>{data.odhodlani[0].text}</h3>
                                {data.odhodlani_popis[0].text}
                            </p>
                        </div>
                    </Fade>
                    <Fade left delay={700}>
                        <div className='pilir'>
                            <figure style={{ animationDelay: 1 }} className='pilire__img__container'><img src={cold} alt="breathing" /></figure>
                            <p>
                                <h3>{data.dychani[0].text}</h3>
                                {data.dychani_popis[0].text}</p>
                        </div>
                    </Fade>
                    <Fade left delay={900}>
                        <div className='pilir'>
                            <figure style={{ animationDelay: 3 }} className='pilire__img__container'><img src={commitment} alt="cold" /></figure>
                            <p>
                                <h3>{data.terapie_chladem[0].text}</h3>
                                {data.terapie_chladem_popis[0].text}
                            </p>
                        </div>
                    </Fade>
                </div>
                <Fade left delay={100}>
                    <div className={"infoButton"}><Button to={"/info"}>Více</Button></div>
                </Fade>
            </div>
            <img className='pilire__wave--bottom' src={downWave} alt="wave" />
        </section>
    )
}
