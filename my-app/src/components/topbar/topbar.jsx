import "./topbar.css"
import { Link } from "react-router-dom";

export default function topbar() {
    const currentUser = true;
    return (
        <div className="top">
            <div className="topLeft">
                <img className="topImg" src="peach.png" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className="link" to ="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to ="/">ORDER</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to ="/review">REVIEW</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className="link" to ="/">ABOUT ME</Link>
                        </li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="peach.png" />
                <i className="topSearchIcon fas fa-search"></i>
                {
                    currentUser ? (

                <p className='topListlog'>Welcome!</p>
                    ):(
                        <ul className="topList">
                           <li className="topListlog">
                               <Link className="link" to ="/login">Log in</Link>
                        </li>
                        <li className="topListlog">
                        <Link className="link" to ="/register">Register</Link>
                    </li>
                </ul>
                    )}
            </div>
        </div>
    )
}
