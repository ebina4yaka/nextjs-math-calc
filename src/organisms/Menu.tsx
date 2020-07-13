import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ContentCard from '../molecules/ContentCard'
import contentList, { Content } from '../data/contentList'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
})

export default function Menu(): React.ReactElement {
  const [contents, setContents] = useState(Array<Content>())
  const classes = useStyles()

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

  return <div className={classes.root}>{createContents()}</div>
}
