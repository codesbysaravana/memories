import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Box } from "@mui/material";

import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts.js"

import memories from "./images/memories.png";
import useStyles from "./styles.js"

import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch])

  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="40" width="70" /> 
        </AppBar>
        <Grow in>
          <Container>
            <Box container justifyContent="space-between" alignItems="stretch" spacing="3">
              <Box item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Box>
              <Box item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Box>
            </Box>
          </Container>
        </Grow>
    </Container>
  )
}

export default App;