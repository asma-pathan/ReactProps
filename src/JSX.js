import React from'react'

function JSX(){
	return React.createElement(
		"div",
		{id:"one",classname:"classone"},
		React.createElement("h1",null,"Good afternoon")
		)
}
export default JSX