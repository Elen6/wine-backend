import express from "express";
import { Message } from "../controllers/messageControler.js";
const router = express.Router()

router.post('/', Message)

export default router;