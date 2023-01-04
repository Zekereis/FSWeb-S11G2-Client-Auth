import React ,{useState,useEffect} from "react";
import {axiosWithAuth} from "./utils";

const List = () => {
    

    const [friends,setFriends] = useState(null);

    useEffect(() => {
        axiosWithAuth()
        .get("api/friends")
        .then(response => {
            if(response.status===200) {
                setFriends(response.data);
            }
        })
        .catch(error=> console.log(error.response.data.error));
    })
    return (
        <div>
            <h2 className="section-title">FRIENDS LIST</h2>
            <ul className="friendList">
                {friends && friends.map(f => <li key={f.id}>-{f.name}-{f.email}</li>)}
            </ul>
        </div>
    )
}

export default List;