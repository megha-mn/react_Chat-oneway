import React from 'react';

function NamesList(props){
	const {type,value,name,onChange,Style,placeHolder,className} = props;

	return(
		<input
		className={className}
		style={Style}
		name={name} 
		type={type} 
		value={value} 
		placeholder={placeHolder}
		onChange={onChange} />      
	)	
}

export default NamesList;