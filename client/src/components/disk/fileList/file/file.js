import React from 'react'

import dirLogo from '../../../../assets/img/file__dir.svg'
import fileLogo from '../../../../assets/img/file__file.svg'
import './file.scss'

const File = ({file}) => {
	return (
		<div className="file">
			<img className="file__img" src={file.type==='dir'? dirLogo : fileLogo} alt=""/>
			<div className="file__name">{file.name}</div>
			<div className="file__date">{file.date.slice(0,10)}</div>
			<div className="file__size">{file.size}</div>
		</div>)
}

export default File
