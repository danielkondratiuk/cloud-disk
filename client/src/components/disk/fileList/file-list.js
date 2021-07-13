import React from 'react'
import './file-list.scss'
import {useSelector} from 'react-redux'
import File from './file/file'

const FileList = () => {
	const files = useSelector(state => state.files.files).map(({_id,...file})=><File key={_id} file={file}/>)

	return (
		<div className="file-list">
			<div className="file-list__header">
				<div className="file-list__name">Name</div>
				<div className="file-list__date">Date</div>
				<div className="file-list__size">Size</div>
			</div>
			{files}
		</div>)
}

export default FileList
