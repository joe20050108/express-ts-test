import express from "express";
import bodyparser from "body-parser";
// OR const express = require("expess"); (Either one works :D)
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// POST = TO SERVER
app.post("/api/exit", (req, res) => {
    process.exit();
});

// GET = TO CLIENT
app.get("/api/test", (req, res) => {
    res.send("/api/test called properly.");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});