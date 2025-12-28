1. What is React?
React is a JavaScript library for building user interfaces, especially single-page applications (SPAs).
It’s component-based: the UI is broken into reusable components.
It uses a virtual DOM to efficiently update the real DOM.
It’s declarative: you describe what the UI should look like, and React takes care of updating it.
Q: Why React is fast?
A: Because it uses Virtual DOM and updates only changed components.
2.JSX (VERY IMPORTANT)
📌 What is JSX?
JSX allows writing HTML inside JavaScript.
syntax:
1.const element = <h1>Hello React</h1>;
2.const name="Dharvi";
<h2>hello{name}</h2>
3.<div>
<h1>Hi</h1>
<h2>Hello</h2>
</div>
3.Functional Components
📌 Component = JavaScript function
Q: Why components must start with capital letter?
A: React treats lowercase as HTML tags.
4.Props (Parent → Child)
i. passing props:
function App(){
    return <Student name="Dharvi" cgpa={9.1}/>
}
ii.Reciving props:
function Student({name,cgpa}){
    return(
        <p>{name}-{cgpa}</p>
    );
}
5.State (useState)
📌 What is State?
State is data that can change and re-render UI.
example:
import {useState } from "react";
function Counter(){
    const[ count,setCount]=usestate(0);
    return(
        <div>
        <h1>{count}</h1>
        <button onclick={() => setCounter(count+1)}>
        increment
        </button>
        </div>
    );
}
Q: Why not use normal variables?
A: React doesn’t track normal variables for re-rendering.


1️⃣ What is State? (VERY BASIC)
State = data that can change over time and update the UI
Example:
Counter value
Form input
Login status
API data
👉 When state changes → component re-renders

Button click
↓
setCount()
↓
React ko pata chala data badla
↓
React re-render
↓
Screen update

React sirf state ko track karta hai, normal variable ko nahi.
# setCount(count + 1);

React ke dimag me ye hota hai:
👀 “Oh! state change hui”
🔄 “Component dobara chalao”
🧱 “Naya Virtual DOM banao”
🔍 “Purane se compare karo”
🎨 “Sirf changed cheez screen pe update karo”
👉 Is process ko re-render bolte hain
# Button click ka full flow 

<button onClick={add}>+</button>
👇👇👇
User ne click kiya
add() function chala
setCount() call hua
React ko signal mila
Component re-render
UI update 😎

