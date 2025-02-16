import jwt from "jsonwebtoken";

const secretKey: string = "EntertainmentWebAppSecretKey"
export const generateTokenOnLogin = (email: string) => {
    return jwt.sign({ email }, secretKey, { expiresIn: 300 })
}

export const validateToken = (token: string) => {
    
    let TOKEN_IS_VALID: boolean = false;

    try {
        if (!token) {
            throw new Error("Empty token.")
        }

        jwt.verify(token, secretKey);
        TOKEN_IS_VALID = true;

    } catch (error) {
        TOKEN_IS_VALID = false;
    }

    return TOKEN_IS_VALID;
}