import express from "express"
import path from "node:path";

const app = express()
const PORT = 3333

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./src/views" });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})