import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

type Props = {
  url: string
  image: string
  title: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'left',
    marginTop: '1vh',
    marginBottom: '1vh',
    marginLeft: '1vw',
    marginRight: '1vw',
  },
})

export default function ContentCard(props: Props): React.ReactElement {
  const { url, image, title } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea href={url}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
