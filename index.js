const express = require("express");
const cors = require("cors")
const app = express();

const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.post("/data", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    console.log(req.body)
    res.status(200).json(req.body)
})

app.listen(port, () => console.log("Application running on port", port))