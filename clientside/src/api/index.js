import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
//for creating specify url and the data we r sending
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);