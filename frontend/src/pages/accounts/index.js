import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

export default function Routes({ match }) {
    return (
        <>
            <LoginRequiredRoute path={match.url + "/profile"} component={Profile} />
            <Route path={match.url + "/login"} component={Login} />
            <Route path={match.url + "/signup"} component={Signup} />
        </>
    )
}