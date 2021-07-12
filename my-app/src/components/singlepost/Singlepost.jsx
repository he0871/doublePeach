import './singlepost.css'

export default function Singlepost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="macarons.jpg" alt="" 
                className='singlePostImg'
                />
                <h1 className="singlePostTitle">
          Lorem ipsum dolor
                <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
            Peach
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        </p>
      </div>
    </div>
  );
}