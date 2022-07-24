import React from 'react'
import "./course.css"
import location from "../../assets/svgs/location.svg"
import info from "../../assets/svgs/info.svg"
import profile from "../../assets/images/Intersection 1.png"
import Button from '../button/Button'
import * as prismicH from '@prismicio/helpers';

export default function Course(/* {course} */) {
    const course = {
        "id": "Yt0QBhAAACIAJyI7",
        "uid": null,
        "url": null,
        "type": "kurz",
        "href": "https://wimhof.cdn.prismic.io/api/v2/documents/search?ref=Yt0VcBAAACIAJzox&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Yt0QBhAAACIAJyI7%22%29+%5D%5D",
        "tags": [],
        "first_publication_date": "2022-07-24T09:40:01+0000",
        "last_publication_date": "2022-07-24T09:40:01+0000",
        "slugs": [
            "kurz-wim-hofa"
        ],
        "linked_documents": [],
        "lang": "cs-cz",
        "alternate_languages": [],
        "data": {
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
                    "text": "5000 Kč",
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
        }
    }
    const date = prismicH.asDate(course.data.datum_kurzu)
    console.log(date)
    return (
        <div className='course'>
            <div className='course__upper'>
                <div className='course__row'>
                    <div>
                        <time className='course__date'>{date.toLocaleDateString()}</time>
                        <span><img src={info} alt="info" /><h3>{course.data.nadpis[0].text}</h3></span>
                    </div>
                    <figure className='course__image__container'>
                        <img src={profile} alt="profile picture" />
                    </figure>
                </div>
                <span><img src={location} alt="location" /><h3>{course.data.lokace_kurzu}</h3></span>
                <p className='course__price'>{parseInt(course.data.cena_kurzu[0].text)} Kč</p>
            </div>
            <div className='course__bottom'>
                <div className='course__info'>
                    <h4>Začátek</h4>
                    <p>{date.getDate()}. {date.getMonth()}.</p>
                    <p>{date.getUTCHours()}</p>
                </div>
                <div className='course__info'>
                    <h4>Konec</h4>
                    <p>10.9.</p>
                    <p>16:00</p>
                </div>
                <div className='course__info'>
                    <h4>Trvání</h4>
                    <p>6h</p>
                </div>
                <div className='course__info'>
                    <h4>Lokace</h4>
                    <p>Liberec</p>
                </div>
                <Button>Více</Button>
            </div>
        </div>
    )
}
