import React from "react";
import ReactDOM from "react-dom/client";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();  
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something Went Wrong</h2>
            <p>{error?.statusText || error?.message}</p> 
        </div>
    );
};

export default Error;
