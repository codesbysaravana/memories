import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        //200 means everything went okay
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


//creation of posts but happens only if theres a form available in frontend
export const createPost = async(req,res) => {
    const post = req.body;

    //preps the post to be saved to database
    // // mongoose document
    const newPost = new PostMessage(post);
    try {
        //saving post to mongoDB
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message : err.message })
    }
}

export const updatePost = async (req, res) => {
    //useParams all over again
    //coming from frotend 
    const { id: _id } = req.params;
    //Extracting the Updated Post Data from req.body
    const post = req.body;

        //check if its a mongoose id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with the Id");

        //calling our mongooseModel
        //waits till post is updated
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost);
}