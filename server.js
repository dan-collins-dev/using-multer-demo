import express from "express";
const app = express();
const port = 8080

app.use(express.static("./public"));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press CTRL+C to end this process");
})