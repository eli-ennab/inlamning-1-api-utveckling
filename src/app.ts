import cors from 'cors'
import express from "express"
import morgan from "morgan"
import prisma from "./prisma" 	// importing the prisma instance we created
import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Use routes
app.use(routes)

export default app
