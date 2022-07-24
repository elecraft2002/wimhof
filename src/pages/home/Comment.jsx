import React from 'react'
import Star from './Star'
import * as prismicH from '@prismicio/helpers';

export default function Comment(/* {recenze} */) {
    const recenze = {
        "id": "Yt1o_BAAACEAKK0b",
        "uid": null,
        "url": null,
        "type": "recenze",
        "href": "https://wimhof.cdn.prismic.io/api/v2/documents/search?ref=Yt1pABAAACAAKK0v&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Yt1o_BAAACEAKK0b%22%29+%5D%5D",
        "tags": [],
        "first_publication_date": "2022-07-24T15:45:04+0000",
        "last_publication_date": "2022-07-24T15:45:04+0000",
        "slugs": [
            "iva-valecka"
        ],
        "linked_documents": [],
        "lang": "cs-cz",
        "alternate_languages": [],
        "data": {
            "autor": [
                {
                    "type": "heading1",
                    "text": "Iva Valecká",
                    "spans": []
                }
            ],
            "text_recenze": [
                {
                    "type": "paragraph",
                    "text": "Kurz vedený usměvavou lektorkou Zuzkou byl velice osvěžující. Moc se mi líbilo, že nám lektorka na všetečné otázky vždy odpověděla a dokázala krásně empaticky provádět dechovým cvičením a pak i vstupem a pobytem v ledové koupeli. Na konci dýchání podle Wima Hoffa jsem se cítila krásně osvěženě, jako bych restartovala všechny buňky a začala od nuly.",
                    "spans": []
                },
                {
                    "type": "paragraph",
                    "text": "Ráda se k tomuto zážitku vracím a postupně se pokouším dýchat dle naučené metody. Je skvělé, že dech máme vždy při sobě a jedinou překážkou bývá jen naše mysl :).",
                    "spans": []
                },
                {
                    "type": "paragraph",
                    "text": "Děkuji Zuzce za krásný zážitek a přeji jí mnoho úspěchů, je vidět, že vede s radostí, kterou předává dále.",
                    "spans": []
                }
            ],
            "hvezdy": "3"
        }
    }
    console.log(recenze)
    /* const Comment = prismicH.asHTML(recenze.data.text_recenze[0]) */

    function Stars() {
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(<Star active={recenze.data.hvezdy > i} key={recenze.id + i} />)
        }
        return stars
    }

    return (
        <div className='comment'>
            <p><Stars /></p>
            <h3>{recenze.data.autor[0].text}</h3>
            {/* <Comment /> */}
        </div>
    )
}
