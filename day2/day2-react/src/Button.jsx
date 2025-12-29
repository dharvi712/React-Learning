import React from "react";
function Button({ label="click me",color="blue",textColor="red"}){

    return(
        <button style={{backgroundColor:color,
            color:textColor,padding:"10px",margin:"5px",
        }}>
            {label}
        </button>
    );

}
export default Button;
/* 
Default Props
label = "Click Me"
color = "blue"
This means:
-If label is not passed, use "Click Me"
-If color is not passed, use "blue"
🔸 backgroundColor: color
backgroundColor: color
Uses the color prop
If you pass:
🔸 color: "white"
Text color = white
Button Text
{label}
{} means JavaScript inside JSX
Displays the value of label prop
*/