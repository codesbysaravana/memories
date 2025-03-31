import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";
import { useStyles } from "./styles.js";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts) || [];

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3} className={classes.container}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;
