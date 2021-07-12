import "./sidebar.css"

export default function Sidebar() {
    return (
    <div className="sidebar"> 
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="myprofilepic.jpg" width="250px" height="250px" alt=""/>
          <p>
            Hi Friends, my name is Peach. I'm a data analyst living in Northern Virginia. 
            I love making desserts in my spare time. I'd love to share my baking journey and story with you.
            Welcome to this little sweet world of Peach!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistItem">Traditional Chinese Dessert</li>
                <li className="sidebarlistItem">Cakes</li>
                <li className="sidebarlistItem">Cookies</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    );
}
