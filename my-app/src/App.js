import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/Single";
import Review from "./pages/review/Review";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
          <Home />
        </Route>
          <Route path="/review">
             <Review />  
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
 