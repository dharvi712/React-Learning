/*useState ek React Hook hai
Iska kaam: data (state) store aur update karna
Yahan hum count ko store karenge*/
import { useState} from "react";
/*
React me component function hota hai
Is component ka naam Change
Ye UI return karega
 */
function Change(){
    /* 
    s line ka matlab:
count → current value (number)
setCount → count update karne ka function
0 → initial value
    */
    const[count,setCount]=useState(0);
    /* 
    Jab + button click hoga → ye function chalega
count + 1 → value badha di
setCount() → React ko bola UI update karo
❌ count++ ❌ (React me allowed nahi)
    */
    const increase= () =>{
        setCount(count+1);
    };
    const decrease = () =>{
        if(count>0){
            setCount(count-1);
        }
    };
    return(
        <div>
            <h2 style={{color:count>10?"red":"black"}}> {count}</h2>
            <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
        </div>
    );
}
export default Change;