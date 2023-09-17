import { Router } from "express";
import { cardsManager } from "../cardsManager.js";

const router = Router();

router.get("/api/cards", async (req, res) => {
    try {
        const newCard = await cardsManager.createCard();
        res.status(200).json({ message: "New card created", card: newCard });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

export default router;
