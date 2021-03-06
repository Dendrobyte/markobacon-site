import BlogPost from "./BlogPost";
import {useState, useEffect} from 'react';
import axios from 'axios';

function BlogFeed(props){

    const [postArray, setPostArray] = useState([])

    // TODO: Make the feed load 10 at first and then be dynamic. Loading the feed is where things are pulled/rendered from DB...?
    useEffect(() =>{
        axios.get(`https://markside-backend.herokuapp.com/getallposts`)
            .then((res) => res.data)
            .then((data) => {
                // Create an array object of posts that I can then return to render
                let blogPostArray = [];
                data.reverse();
                blogPostArray = data.map((postInfo, index) => 
                    (
                        <BlogPost key={index} postTitle={postInfo.postTitle} postTags={postInfo.postTags} dateInUnix={postInfo.dateInUnix} postBody={postInfo.postBody}/>
                    )
                )
                setPostArray(blogPostArray);
            })
            .catch((err) => {
                setPostArray([<BlogPost key={-1} postTitle="Uh oh..." postTags={"ERR"} dateInUnix={0} postBody={"Something went wrong... :(\n\n"+err}/>])
            });
    },  []);

    return postArray;
}

export default BlogFeed;