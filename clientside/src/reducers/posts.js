// eslint-disable-next-line
export default (posts = [], action) => {
    switch (action.type) {
        case "UPDATE":
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case "LIKE":
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        case "DELETE":
                return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};



//If post._id !== action.payload, it means the post._id is not the one we want to delete, so it stays in the array.

//If post._id === action.payload, that post will be filtered out (deleted).

//Why !== instead of ===?
//We are removing the post with the matching _id, so we want to keep all posts except the one with the matching ID. That's why we use !== (not equal to).
     