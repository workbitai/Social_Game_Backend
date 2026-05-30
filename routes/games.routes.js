import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {

    const rawData = fs.readFileSync("./data/games.json");

    const games = JSON.parse(rawData);

    res.json({
        success: true,
        games
    });
});

export default router;