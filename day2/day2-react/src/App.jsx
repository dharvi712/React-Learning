import Student from"./Student";
/*function App(){
    return(
        <div>
            <h1>Student List</h1>
            <Student name="Dharvi" cgpa={9.3}/>
            <Student name="Ananya" cgpa={9.1}/>
            <Student name="Vaibhavi" cgpa={8.9}/>
        </div>
    );
}
export default App;*/
// Dynamic Rendering using map()
/*function App(){
  const students=[
    {id:1,name:"Dharvi",cgpa:9.3},
    {id:2,name:"Ananya",cgpa:9.1},
    {id:3,name:"Vaibhavi",cgpa:8.9}
  ];
  return (
    <div>
      <h1>Student List</h1>
      {students.map((s)=>
      (<Student key={s.id} name={s.name} cgpa={s.cgpa}/>)
      )}
    </div>
  );
}
export default App;*/
import React from "react";
import Button from"./Button";
function App(){
  return (
    <div style={{ padding: "20px" }}>
    <h1>Button Props Demo</h1>

    {/* Default props */}
    <Button />

    {/* Custom label */}
    <Button label="Submit" />

    {/* Custom background color */}
    <Button label="Cancel" color="red" />

    {/* Custom text color */}
    <Button label="Delete" color="black" textColor="yellow" />

    {/* Fully customized */}
    <Button label="Info" color="green" textColor="white" />
  </div>
  );
}
export default App;
//The JSX inside the return statement is responsible for what is shown on the screen.
