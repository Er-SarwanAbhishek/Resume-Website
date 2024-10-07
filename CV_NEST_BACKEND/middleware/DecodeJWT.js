const jsonwebtoken = require('jsonwebtoken');
const jwt_secret_code = "CVnestSeCureTYforLogin321@#";

const decodeToken = (req, res, next) => {
    // Get the user's JWT token from the request headers
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const decodedToken = jsonwebtoken.verify(token, jwt_secret_code);
        req.id = decodedToken.id;
        next();
    } catch (error) {
        // If token verification fails, return an unauthorized status and error message
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

// Export the middleware function
module.exports = decodeToken; 
