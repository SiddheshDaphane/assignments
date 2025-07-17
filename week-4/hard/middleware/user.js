function userMiddleware(req, res, next) {
    const token = req.headers.authorization
    const verifiedToken = jwt.verify(token, JWT_SECRET)

    if(verifiedToken) {
        req.userId = verifiedToken.id 
        next()
    } else{
        res.json({
            message: "Invalid token!"
        })
    }
}

module.exports = userMiddleware;