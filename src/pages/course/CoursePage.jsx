import { PrismicRichText, usePrismicDocumentByID } from '@prismicio/react'
import React from 'react'
import { useParams } from 'react-router'
import * as prismicH from '@prismicio/helpers';
import "./coursePage.css"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import topWave from "../../assets/svgs/wave.svg"
import downWave from "../../assets/svgs/wave_down.svg"
import Courses from '../../components/courses/Courses';
import { ReactComponent as LocationSvg } from "../../assets/svgs/location.svg"
import { ReactComponent as FoodSvg } from "../../assets/svgs/food-restaurant-icon.svg"
import { ReactComponent as InfoSvg } from "../../assets/svgs/info.svg"
import { ReactComponent as BagSvg } from "../../assets/svgs/shopping-bag.svg"
import Button from '../../components/button/Button';


export default function CoursePage(props) {



    /*     const center = {
            lat: -3.745,
            lng: -38.523
        }; */

    function Map({ center }) {
        const containerStyle = {
            width: '400px',
            height: '400px',
            maxWidth: "100%"
        };
        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: "AIzaSyBNNnVAI6mPg8SWMszs2ud5anSpDkbW69c"
        })

        const [map, setMap] = React.useState(null)

        const onLoad = React.useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map)
        }, [])

        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])

        return isLoaded ? (
            <GoogleMap
                //mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                id="google_map"
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        ) : <></>
    }

    const { id } = useParams()
    console.log(id)
    const course = usePrismicDocumentByID(id)
    const data = course[0]?.data
    console.log(data)
    /*  const data = {
         "nadpis": [
             {
                 "type": "heading1",
                 "text": "Kurz Wim Hofa",
                 "spans": []
             }
         ],
         "datum_kurzu": "2022-09-09T22:00:00+0000",
         "konec_kurzu": "2022-09-09T14:00:00+0000",
         "uvodni_fotografie_kurzu": {
             "dimensions": {
                 "width": 612,
                 "height": 397
             },
             "alt": "Zasněžené hory",
             "copyright": null,
             "url": "https://images.prismic.io/wimhof/8a4377c9-5f44-444c-a03c-3f290adf032c_mountains.jpg?auto=compress,format"
         },
         "cena_kurzu": [
             {
                 "type": "heading1",
                 "text": "5000",
                 "spans": []
             }
         ],
         "lokace_kurzu": "Liberec",
         "presna_lokace_kurzu": {
             "latitude": 57.3352110986422,
             "longitude": -0.7334819718154041
         },
         "kratky_popis": [
             {
                 "type": "paragraph",
                 "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Vivamus ac leo pretium faucibus. Vivamus porttitor turpis ac leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Pellentesque pretium lectus id turpis. Nulla quis diam.",
                 "spans": []
             }
         ],
         "dlouhy_popis_kurzu": [
             {
                 "type": "paragraph",
                 "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Vivamus ac leo pretium faucibus. Vivamus porttitor turpis ac leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Pellentesque pretium lectus id turpis. Nulla quis diam. Aliquam ante. Nullam sit amet magna in magna gravida vehicula. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Pellentesque ipsum.",
                 "spans": []
             },
             {
                 "type": "paragraph",
                 "text": "Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Duis pulvinar. Suspendisse nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec iaculis gravida nulla. Nunc auctor. Nulla pulvinar eleifend sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Vivamus porttitor turpis ac leo. Suspendisse nisl. Integer in sapien.",
                 "spans": []
             },
             {
                 "type": "paragraph",
                 "text": "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Phasellus et lorem id felis nonummy placerat. Nullam eget nisl. Vivamus porttitor turpis ac leo. Nulla quis diam. Aenean placerat. Praesent vitae arcu tempor neque lacinia pretium. Integer lacinia. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam quis quam.",
                 "spans": []
             }
         ],
         "co_s_sebou": [
             {
                 "type": "paragraph",
                 "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Vivamus ac leo pretium faucibus.",
                 "spans": [
                     {
                         "start": 6,
                         "end": 22,
                         "type": "strong"
                     }
                 ]
             }
         ],
         "jidlo": [
             {
                 "type": "paragraph",
                 "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Vivamus ac leo pretium faucibus. Vivamus porttitor turpis ac leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Pellentesque pretium lectus id turpis. Nulla quis diam.",
                 "spans": []
             }
         ]
     } */


    const date = data && data.datum_kurzu ? prismicH.asDate(data.datum_kurzu) : null
     console.log(date)

    if (course[1].state == 'loaded')
        return (
            <main>
                <div className='course__page__top' style={{ backgroundImage: `url(${data.uvodni_fotografie_kurzu.url})` }}>
                    <div>
                        <h1>{data.nadpis[0].text}</h1>
                        {data.datum_kurzu ? (<div className='course__date'><p>{date.getDate()}. {date.getMonth() + 1}.</p>
                            <p>{date.getHours() + ':' + date.getMinutes()}</p></div>) : null}
                    </div>
                </div>
                <section className='course__page__info'>
                    <img className='wave' src={topWave} alt="wave" />
                    <div className='course__page__container'   >
                        <div className='info__block'>
                            <p className='info__heading'><InfoSvg /><h2>Informace</h2></p>
                            <PrismicRichText field={data.dlouhy_popis_kurzu} />
                        </div>
                        <div className='info__block'>
                            <p className='info__heading'><BagSvg /><h2>Co s sebou</h2></p>
                            <PrismicRichText field={data.co_s_sebou} />
                        </div>
                        <div className='info__block'>
                            <p className='info__heading'><FoodSvg /><h2>Jídlo</h2></p>
                            <PrismicRichText field={data.jidlo} />
                        </div>
                        <div className='info__block'>
                            <p className='info__heading'><LocationSvg /><h2>Lokace</h2></p>
                            <div>
                                <p>{data.lokace_kurzu}</p>
                                <Map center={{ lat: data.presna_lokace_kurzu.latitude || 0, lng: data.presna_lokace_kurzu.longitude || 0 }} />
                            </div>
                        </div>
                    </div>
                    <Button style={{margin:"auto"}} target="_blank" href={data.odkaz_na_formular?.url}>Objednat</Button>
                    <img className='wave--bottom' src={downWave} alt="wave" />
                </section>

                <Courses language={props.language} />

            </main>
        )
    return null
}