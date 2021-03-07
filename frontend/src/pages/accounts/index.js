import React from "react";
import {Route} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

export default function Routes({ match }){
    return (
        <>
            <Route path={match + "/profile"} component={Profile} />
            <Route path={match + "/login"} component={Login} />
        </>
    )
}