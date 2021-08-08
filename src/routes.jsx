import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/channel/:channelId">
        <Chat />
      </Route>
      <Route path="/" exact={true} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
