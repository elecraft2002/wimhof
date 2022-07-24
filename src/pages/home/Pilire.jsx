import React from 'react'
import "./pilire.css"
import topWave from "../../assets/svgs/wave.svg"
import downWave from "../../assets/svgs/wave_down.svg"
import breathing from "../../assets/images/pilire/breathing-with-wim-hof-method.png"
import cold from "../../assets/images/pilire/cold-therapy-wim-hof-method.png"
import commitment from "../../assets/images/pilire/commitment-with-wim-hof-method.png"
export default function Pilire() {
    return (
        <section className='pilire__container'>
            <img className='pilire__wave' src={topWave} alt="wave" />
            <div className='pilire'>
                <h2>3 pilíře wim hofovy metody</h2>
                <div className='pilire__list'>
                    <div className='pilir'>
                        <figure style={{ animationDelay: 0 }} className='pilire__img__container'><img src={commitment} alt="commitment" /></figure>
                        <p>
                            <h3>Odhodlání</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                        </p>
                    </div>
                    <div className='pilir'>
                        <figure style={{ animationDelay: 1 }} className='pilire__img__container'><img src={breathing} alt="breathing" /></figure>
                        <p>
                            <h3>Dýchání</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                        </p>
                    </div>
                    <div className='pilir'>
                        <figure style={{ animationDelay: 3 }} className='pilire__img__container'><img src={cold} alt="cold" /></figure>
                        <p>
                            <h3>Terapie chladem</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                        </p>
                    </div>
                </div>
            </div>
            <img className='pilire__wave--bottom' src={downWave} alt="wave" />
        </section>
    )
}
