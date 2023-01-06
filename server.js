const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.port || 8080;

app.use(cors());

app.get("/", (_, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})