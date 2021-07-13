import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './components/app/app'
import {Provider} from 'react-redux'
import {store} from './reducers'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root'))
