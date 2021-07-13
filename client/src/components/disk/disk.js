import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createDir, getFiles} from '../../actions/file'
import './disk.scss'
import FileList from './fileList/file-list'

const Disk = () => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state=>state.files.currentDir)
	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir,dispatch])

	function createDirHandler() {
		dispatch(createDir(currentDir,'qqq'))
	}

	return (
		<div className="disk">
			<div className="disk__btns">
				<button className="disk__back btn btn-primary">Back</button>
				<button
					className="disk__create btn btn-success"
					onClick={()=>createDirHandler()}
				>Create new folder</button>
			</div>
			<FileList/>
		</div>)
}

export default Disk
