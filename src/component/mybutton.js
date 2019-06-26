import React from "react";

export default function MyButton(props){
    return(
        <button onClick ={props.onSimpleClick} style={{backgroundColor:"blue"}} >
            {props.children}

        </button>
    )

}