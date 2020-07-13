import React, { useEffect, useState } from 'react'
import ContentCard from '../molecules/ContentCard'

type Json = {
  data: Content[]
  Response: string
  Error: null
}

type Content = {
  id: number
  title: string
  url: string
  image: string
}

export default function ContentList(): React.ReactElement {
  const [contents, setContents] = useState(Array<Content>())
  const json = `${window.location.protocol}//${window.location.host}/data/contentList.json`

  useEffect(() => {
    fetch(json)
      .then((response) => response.json())
      .then((jsonResponse: Json) => {
        setContents(jsonResponse.data)
      })
  }, [])

  const createContents = (): JSX.Element[] => {
    const list: JSX.Element[] = []
    contents.map((content: Content) =>
      list.push(
        <ContentCard
          key={content.id}
          title={content.title}
          url={content.url}
          image={content.image}
        />
      )
    )
    return list
  }

  return <>{createContents()}</>
}
