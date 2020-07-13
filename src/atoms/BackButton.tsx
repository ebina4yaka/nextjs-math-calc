import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    fontSize: '3em',
  },
})

export default function BackButton(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <IconButton href="/" aria-label="back">
        <ArrowBackIcon />
        Back
      </IconButton>
    </div>
  )
}
