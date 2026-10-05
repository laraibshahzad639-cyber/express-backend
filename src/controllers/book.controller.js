import { sendSuccess } from "../libs/sendSuccess.js";
import {
  getbookbyid,
  fbookquery,
  getallbooks,
} from "../services/book.services.js";

export function getbooksc(req, res) {
  const { category, price, author, color } = req.query;

  if (!category && !price && !author && !color) {
    const all = getallbooks();

    sendSuccess(res, 200, "Book fetched .!", all);
  }

  const result = fbookquery(author, category, price, color);

  if (result.length === 0) {
    return res.status(404).json({
      status: false,
      message: "Books not found",
    });
  }

  sendSuccess(res, 200, "Book fetched successfully.!", result);
}

export function getbooksbyid(req, res) {
  const id = req.params.id;

  const book = getbookbyid(id);

  if (!book) {
    return res.status(404).json({
      status: false,
      message: "Book not found",
    });
  }

  res.status(200).json({
    status: true,
    message: "Book fetched by id",
    data: book,
  });
}

export function searchbook(req, res, next) {
  try {
    const { category, price, author, color } = req.body;

    const result = fbookquery(author, category, price, color);

    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Books not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Books fetched successfully by using post method",
      count: result.length,
      books: result,
    });
  } catch (error) {
    next(error);
  }
}
