 import {useState} from 'react' 
 function About(){
 	const [village,setVillage]=useState("Turkey");
 	const [country,setCountry]=useState("Paris")
	return(
		<div>
		  {/*<h1>{village}</h1>
		  <p>{country}</p>*/}
		  <input
		    onChange={(e)=>setVillage(e.target.value)}/><br/>
		    <input onChange={(e)=>setCountry(e.target.value)}/>
		    <button onClick={()=>console.log(village,country)}>Submit</button>
		 </div>
		)
}
export default About