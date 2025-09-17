const { verify, decode} = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || typeof(token) === 'undefined') {
       return res.status(401).send('Access token não informado');
    }

    const [, accessToken] = token.split(" ");

    try {
        const secretKey = process.env.JWT_SECRET; 
        verify(accessToken, secretKey);

        const { id, email } = await decode(accessToken);

        req.usuarioId = id;
        req.usuarioEmail = email;

        return next();
    } catch (error) {
        res.status(401).send('Usuario não foi autorizado');
    }
}