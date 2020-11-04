import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import PostDetailsPage from "./Pages/PostDetailsPage/PostDetailsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts/:postId?" component={PostDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
