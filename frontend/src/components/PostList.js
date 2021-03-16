import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post"
import { useAppContext } from "store";
import { Alert } from "antd";

const apiUrl = "http://localhost:8000/api/posts/"

export default function PostList() {
    const { store: { jwtToken }, dispatch } = useAppContext();
    const [postList, setPostList] = useState([]);

    // 컴퍼넌트가 생성된 후 호출 -> hook
    useEffect(() => {
        const headers = { 'Authorization': `JWT ${jwtToken}` };
        Axios.get(apiUrl, { headers })
            .then(response => {
                const { data } = response;
                console.log("loaded reponse :", response);
                setPostList(data)
            })
            .catch(error => {
                // error.response;
            })
        console.log("mounted")
    }, []);

    return (
        <div>
            {postList.length === 0 && <Alert type="warning" message="포스팅이 없습니다 :(" />}
            {postList.map(post => <Post post={post} key={post.id} />
            )}
        </div>
    )
}