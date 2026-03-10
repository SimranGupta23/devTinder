const adminAuth = (req, res, next) => {
    console.log("Auth called")
    const token = 'xyz'
    const isAuthorized = token === 'xyz'
    if (!isAuthorized) {
        res.status(401).send("Unauthorized Request")
    } else {
        next()
    }
}

module.exports = {adminAuth}