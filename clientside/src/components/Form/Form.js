import React, { useState, useEffect } from 'react';
import { useStyles } from "./styles"
import FileBase from './FileBase';
import { useDispatch, useSelector } from 'react-redux';
//calling from action posts for the creatingpost function
import { createPost, updatePost} from "../../actions/posts";
import { TextField, Button, Typography, Paper } from "@mui/material";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: "", title: "", message: "", tags: "", selectedFile: ""
    });
    // getting only the data for the updation from the redux reducer as one singular thing
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])


//submit and clear functions
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //when the same id passes in its gonna updatethe post
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        Clear();
    };

    const Clear = () => {
        setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
        });
    };


    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    { currentId ? "Editing" : "Creating"} a Memory
                </Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label="Creator"
                    fullWidth 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name='title'
                    variant='outlined'
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name='tags'
                    variant='outlined'
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
                />

                <div className={classes.fileInput}>
                     <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    /> 
                </div>

                <Button className={classes.buttonSubmit} variant='container' color="primary" size='large' type='submit' fullWidth>
                    Submit
                </Button>

                <Button variant='contained' color="secondary" size='small' onClick={Clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
