const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "CHAVE_SECRETA_CURSO_ANGULAR";
const TOKEN_EXPIRATION = 300;

const users = [
    {
        username: "user",
        password: "user",
        scopes: ["dashboard", "pagamentos"],
        walletStatus: "active",
    },
    {
        username: "admin",
        password: "admin",
        scopes: ["dashboard", "pagamentos", "admin"],
        walletStatus: "blocked",
    },
];

app.use(bodyParser.json());

app.use(cors());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username, scopes: user.scopes }, SECRET_KEY, {
        expiresIn: TOKEN_EXPIRATION,
    });

    res.json({ token });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        // Erro de "Não Autorizado"
        return res.sendStatus(401);
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}

app.get("/verify-token", authenticateToken, (req, res) => {
    res.json({ valid: true, user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} now!`);
});
