import * as React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">Demo Cases</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
