// process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const app = express()
const PORT = process.env.serverPort
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async () => {
	try {
		await mongoose.connect(process.env.mongoUrl, {
			useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
		})
		app.listen(PORT, () => {
			console.log(`Server has been started on port : ${PORT}`)
		})
	} catch (e) {

	}
}
start()
