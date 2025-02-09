import jwt from 'jsonwebtoken'

 export const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.send('Access denied. No token provided.')
    }


    try{
        let decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }
    catch(error){
        return res.send('Access denied. Invalid token.')
    }
}