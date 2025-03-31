import React from 'react';
import { Box, CircularProgress } from "@mui/material"
import { useSelector } from 'react-redux';
import Post from "./Post/Post.js";
import { useStyles } from "./styles.js";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();

    //since getting all state.posts from reducers/posts and just getting the posts from allstates
    const posts = useSelector((state) => state.posts);

    console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Box className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Box key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={ setCurrentId } />
          </Box>
        ))}
      </Box>
    )
  )
}

export default Posts