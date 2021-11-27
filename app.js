import express from 'express'
const app = express()
import cookieParser  from 'cookie-parser'
import errorMiddleware from './middlewares/error.js'


app.use(express.json())
app.use(cookieParser())


//import all routes
import auth from './routes/auth.js'
import product from './routes/product.js'



app.use('/api',auth)
app.use('/api',product)


//middle ware for handle error
app.use(errorMiddleware)

export default app