import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountRoutes from "./accounts";

export default function Root() {
    return (
        <AppLayout>
            최상위 컴퍼넌트
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path="/accounts" component={AccountRoutes} />            
        </AppLayout>
    )
}

