import React from 'react';

function Button(props){
	const {btnName,onClick } = props

	return(
		<button onClick={onClick}>{btnName}</button>
	)	
}

export default Button;