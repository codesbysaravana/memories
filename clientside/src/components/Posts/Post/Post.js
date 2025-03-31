import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//dayjs and moment for handling dates and times
import dayjs from "dayjs";
import moment from "moment"
import relativeTime from "dayjs/plugin/relativeTime";

import { useStyles } from "./styles.js";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body">{moment(post.createdAt).fromNow()}</Typography>
      </div>
{/* 
    Edit Button */}

      <div className={classes.overlay2}>
        <Button 
          style={{color: "white"}}
          size='small'
          onClick={() => setCurrentId(post._id)}
          >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
            Like
            {post.likeCount}
        </Button>
        <Button size="small" color='primary' onClick={() => {}}>
          <DeleteIcon fontSize="small" />
            Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post