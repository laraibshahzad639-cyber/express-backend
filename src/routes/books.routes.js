import express from "express";

import {
    getbooksc,
    getbooksbyid,
    searchbook
} from "../controllers/book.controller.js";

import { authMiddleware } from "../middleware/Authenticate.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getbooksc);

router.post("/search", searchbook);

router.get("/:id", getbooksbyid);

export default router;