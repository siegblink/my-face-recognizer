import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
}))

export default function NavBar(props) {
  const { openSidebar, handleSidebarOpen } = props
  const classes = useStyles()

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: openSidebar,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          onClick={handleSidebarOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: openSidebar,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap className={classes.title}>
          Face recognizer
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
