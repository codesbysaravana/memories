//combine reducers mergers multiple reducers into a single root reducer

import { combineReducers } from "redux";

//for handling the actions the posts.js
import posts from "./posts";

//combines all the main reducers  multi into one
export default combineReducers({ posts })