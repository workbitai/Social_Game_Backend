import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import gamesRoutes from "./routes/games.routes.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/icons", express.static(path.join(__dirname, "public", "icons")));
app.use("/bundles", express.static(path.join(__dirname, "ServerData")));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.use("/api/games", gamesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running On Port ${PORT}`);
});