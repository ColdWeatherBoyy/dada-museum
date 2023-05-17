import express, { urlencoded, json } from "express";
import { join } from "path";
import * as url from 'url';
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "..", "client", "dist")));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "dist", "index.html"));
})

app.use(routes)

app.listen(3001, () => {console.log("Listening at 3001")});