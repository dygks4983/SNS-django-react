import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StoryList from "./StoryList"
import SuggestionList from "./SuggestionList"

export default function AppLayout({ children }) {
    return (
        <div className="app">
            <div className="header">
                <h1 className="page-title">Instagram</h1>
                <div className="serch">
                    <Input.Search />
                </div>
                <div className="topnav">
                    <Menu mode="horizontal">
                        <Menu.Item>menu1</Menu.Item>
                        <Menu.Item>menu2</Menu.Item>
                        <Menu.Item>menu3</Menu.Item>
                    </Menu>
                </div>
            </div>
            <div className="contents">{children}</div>
            <div className="sidebar">
                <StoryList style={{ marginBottom: "1rem" }}/>
                <SuggestionList />
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}