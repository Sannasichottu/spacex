import React,{useEffect, useState} from "react";
import '../Styles/search.css';
import Axios from "axios";
//import Launches from "./Launches";

function Search () {

    const [users,setUsers] = useState([]);
    const [mission_name,setName] = useState("");

    useEffect (() =>{
        Axios.get("https://api.spacexdata.com/v3/launches")
        .then(res => setUsers(res.data))
    },[])

    return(
        <>
            <h2>Search</h2>
            <input type="text" placeholder="Enter Mission Name" value={mission_name} onChange={e =>setName(e.target.value)} />
            {mission_name.length > 0 && 
            users.map(e =>(
            <></>
            ))}
        </>
    )
}

export default Search;