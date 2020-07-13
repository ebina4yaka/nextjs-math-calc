import React, { useEffect, useState } from 'react'
import ContentCard from '../molecules/ContentCard'
import contentList, { Content } from '../data/contentList'

export default function ContentList(): React.ReactElement {
  const [contents, setContents] = useState(Array<Content>())

  useEffect(() => {
    setContents(contentList)
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
