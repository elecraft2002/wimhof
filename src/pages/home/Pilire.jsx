import React from 'react'
import "./pilire.css"
import topWave from "../../assets/svgs/wave.svg"
import downWave from "../../assets/svgs/wave_down.svg"
export default function Pilire() {
    return (
        <section className='pilire__container'>
            <img className='pilire__wave' src={topWave} alt="wave" />
            <div className='pilire'>
                <h2>3 pilíře wim hofovy metody</h2>
                <div>
                    <div>
                        <figure><img src="" alt="" /></figure>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
