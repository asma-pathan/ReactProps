import'../App.css'
 import {Link} from 'react-router-dom'

function Navbar(){
	return(
		<div className="nav" >
		 <Link to="/">Home</Link>
		 <Link to="/contact">Contact</Link>
		 <Link to="/about">About</Link>
		 </div>
		)
}
export default Navbar