import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Toolbar from "./Components/Toolbar/Toolbar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PostDetailsPage from "./Pages/PostDetailsPage/PostDetailsPage";
import { bootstrapLoginState } from "./store/Auth/authActions";

function App() {
  const dispatch = useDispatch();
  const userKey = localStorage.getItem("JWTKEY");
  const userProfile = localStorage.getItem("USERPROFILE");
  // console.log("LOCALSTORAGE", localStorage);
  useEffect(() => {
    dispatch(bootstrapLoginState(userKey, userProfile));
  }, [dispatch, userKey, userProfile]);

  return (
    <div className="App">
      <NavBar />
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts/:postId?" component={PostDetailsPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
