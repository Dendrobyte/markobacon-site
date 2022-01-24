import './Markside.css';

// TODO: Blog post should have two main states- preview and extended. Should seamlessly work when in a BlogFeed component.
// TODO: For obvious reasons, these things should be passed in as props.

function BlogPost(props) {

    let convertUnixToTimestamp = (timeInUnix => {
        let date = new Date(timeInUnix * 1000);
        return date.toDateString();
    });

    return (
        <>
            <div className="blogPostContainer">
                <div className="blogPostHeader">
                    <p className="blogPostTitle">{props.postTitle}</p>
                    <p className="blogPostTags">{props.postTags}</p> { /* TODO: Make into a list when I integrate db stuff */ }
                    <p className="blogPostTimestamp">{convertUnixToTimestamp(props.dateInUnix)}</p>
                </div>
                <p className="blogPostContent">{props.postBody}</p>
                <p className="blogPostExpand">Read More...</p> { /* TODO: Switch it when it toggles (make this a function) */ }
            </div>
        </>
    )

}

export default BlogPost;