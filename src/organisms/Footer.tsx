import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../molecules/Coryright'

const useStyles = makeStyles({
  footer: {
    width: '100%',
  },
})

export default function Footer(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <Copyright />
    </div>
  )
}
