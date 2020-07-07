import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  title: string
}

const useStyles = makeStyles({
  header: {
    width: '100%',
  },
})

export default function Header(props: Props): React.ReactElement {
  const classes = useStyles()
  const { title } = props
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
