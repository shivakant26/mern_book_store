import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();
    return(
        useEffect(()=>{
            localStorage.clear();
            sessionStorage.clear();
            navigate("/");
        })
    )
}

export default Logout;