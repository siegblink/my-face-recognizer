import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import LinkIcon from '@material-ui/icons/Link'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'

const useStyles = makeStyles((theme) => ({
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
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
  inputform: {
    marginBottom: 32,
  },
  stats: {
    margin: '0px 0 16px',
  },
  results: {
    marginBottom: 24,
  },
}))

export default function Content() {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.inputform}>
              Enter the URL of the picture below to detect faces.
            </Typography>
            <form>
              <TextField label='Your image URL' variant='outlined' fullWidth />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.stats}>Current stats</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Tooltip title='Link' placement='left' arrow>
                  <LinkIcon />
                </Tooltip>
              </Grid>
              <Grid item>
                <Typography>Link: https://reactjs.org/</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <Tooltip title='Entry count' placement='left' arrow>
                  <TrendingUpIcon />
                </Tooltip>
              </Grid>
              <Grid item>
                <Typography>1</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.results}>Results</Typography>
            <Typography>No data available.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}
