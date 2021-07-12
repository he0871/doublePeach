
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"src="macarons.jpg" width="500px" height="100%" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Chinese Traditional</span>
                    <span className="postCat">Cakes</span>
                    <span className="postCat">Cookies</span>
                </div>
                <span className="postTitle">
                    hahahaha
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet 
            </p>
        </div>
    )
}
