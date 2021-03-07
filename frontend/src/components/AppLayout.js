import React from "react";
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

export default function AppLayout({ children }) {
    return (
        <>
            <AppHeader />
            {children}
            <AppFooter />
        </>
    );
}