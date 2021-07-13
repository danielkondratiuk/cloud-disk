import React from 'react'

import './input.scss'

const Input = ({value,type, placeholder, setValue}) => {


	return (
		<input value={value}
					 onChange={(e)=>setValue(e.target.value)}
					 className="input"
					 type={type}
					 placeholder={placeholder}/>
	)
}

export default Input
