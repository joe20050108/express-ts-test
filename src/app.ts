import express from "express";
// OR const express = require("expess"); (Either one works :D)
const app = express();
const port = 3000;

app.use(express.static("public"));

app.post("/exit-button", (req, res) => {
    process.exit();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});