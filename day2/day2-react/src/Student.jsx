// Student components
function Student ({name,cgpa}){
    return(
        <div style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>
            <h2>Name:{name}</h2>
            <p>CGPA:{cgpa}</p>
        </div>
    );
    

}
export default Student; 
//DYNAMIC RENDERING USING map()
