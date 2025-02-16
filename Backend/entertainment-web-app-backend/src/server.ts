import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { usersListDB } from './utils/users-list-bd.js';
import { generateTokenOnLogin } from './utils/jwt-manager.js';
import { authenticateToken } from './middlewares/authenticate-token.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
    res.status(200).json({ usersListDB })
})

app.post("/login", (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userFound = usersListDB.find(
        user => user.email === email && user.password === password
    )

    if (!userFound) {
        res.status(401).json({ message: "Invalid credentials."});
        return;
    }

    const userToken = generateTokenOnLogin(email);

    res.status(200).json({ token: userToken })
})

app.post("/create-user", (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Both fields (email and password) are required." });
        return;
    }

    const userAlreadyExists = usersListDB.find(user => user.email === email);

    if (userAlreadyExists) {
        res.status(409).json({ message: "This email address is already in use." });
        return;
    }

    const newUser = { email, password }
    usersListDB.push(newUser);
    res.status(201).json({ message: "Account created successfully." });
})

app.post("/validate-token", authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ message: "Token is valid." })
})

app.get("/verify-token", authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ valid: true })
})

app.listen(PORT, () => {
    console.log(`Server running! 🔥`);
})