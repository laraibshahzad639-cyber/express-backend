export function authMiddleware(req, res, next) {

    console.log("Auth middleware runningg");

    const token = req.headers.authorization;

    console.log( token);

    if (!token) {
        return res.status(401).json({
            status: false,
            statusCode:401,
            message: "Unauthorized"
        });
    }



    next();
}