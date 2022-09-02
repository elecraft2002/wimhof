import { PrismicRichText, usePrismicDocumentByID, usePrismicDocumentsByTag } from '@prismicio/react'
import React from 'react'
import "./info.css"

export default function InfoPage() {
  const document = usePrismicDocumentByID("YxH0iBYAAJTqco1M")
  console.log(document)
  return (
    <div className='infoContainer'>
      <div className='infoBlock'>
        <PrismicRichText field={document[0]?.data.wimhof} />
      </div>
    </div>
  )
}
