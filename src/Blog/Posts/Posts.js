import "Posts.css";

export default function Posts() {
    return(
        <div className="post">
            <img className="post-image" src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" alt=""/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
        </div>
        <span className="postTitle">Title</span>
        <hr />
        <span className="postDate">1 hour later</span>
        </div>
        
    );
}