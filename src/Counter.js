import React from "react";
var count = 1;

function Counter(){

    count=count+1;
    return(
        <div>
               <p>{count}</p>     
        </div>
    )

}
export default Counter;