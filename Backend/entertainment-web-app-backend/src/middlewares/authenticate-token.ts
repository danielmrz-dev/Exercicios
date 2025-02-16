import { NextFunction, Request, Response } from "express";
import { validateToken } from "../utils/jwt-manager.js";

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader: string | undefined = req.headers['authorization'];
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Token not provided." });
        return;
    }

    const TOKEN_IS_VALID = validateToken(token);

    if (!TOKEN_IS_VALID) {
        res.status(403).json({ message: "Invalid or expired token." });
        return;
    }

    next();
}