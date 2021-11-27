import errorHandler from '../utlis/errorHandler.js'

const error = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success:false,
            error:err,
            errMessage:err.message,
            stack:err.stack
        })
    }

    res.status(err.statusCode).json({
        success:false,
        message:error.message || 'Internal Server error'
    })
}

export default error