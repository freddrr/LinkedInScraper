const express = require("express");
const app = express();

app.get("/getSomething", async (req, res) => {
    res.json({fruits: ["apple", "banana"]});
})

app.listen(8080, () => {
    console.log("server started on port 8080");
})