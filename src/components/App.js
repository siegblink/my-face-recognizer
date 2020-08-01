import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'
import NavBar from './navbar/NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleSidebarOpen = () => {
    setOpen(true)
  }

  const handleSidebarClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar openSidebar={open} handleSidebarOpen={handleSidebarOpen} />
      <Sidebar openSidebar={open} handleSidebarClose={handleSidebarClose} />
      <Content />
    </div>
  )
}
