import React from 'react';


export default function wrrap(props){
    return(
        <div>
            {
                props.children
            }
        </div>
    )
}