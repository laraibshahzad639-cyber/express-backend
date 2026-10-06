import express from "express";

import {
    getbooksc,
    getbooksbyid,
    searchbook,
    queryBookMethod
} from "../controllers/book.controller.js";

import { authMiddleware } from "../middleware/Authenticate.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getbooksc);
router.query("/query",queryBookMethod );

router.post("/search", searchbook);

router.get("/:id", getbooksbyid);

export default router;