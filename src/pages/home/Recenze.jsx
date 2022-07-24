import { useAllPrismicDocumentsByType } from '@prismicio/react'
import Comment from './Comment'
import React from 'react'

export default function Recenze(props) {
    const [recenze] = useAllPrismicDocumentsByType("recenze", { lang: props.language.lang })
    if (!recenze)
        return null
    return (
        <div className='recenze'>
            <h2>Recenze</h2>
            {recenze.map(recenze => {
                return <Comment recenze={recenze} key={recenze.id} />
            })}
        </div>
    )
}
