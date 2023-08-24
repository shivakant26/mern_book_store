import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();
    return(
        useEffect(()=>{
            localStorage.clear();
            navigate("/");
        })
    )
}

export default Logout;