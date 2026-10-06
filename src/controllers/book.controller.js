import { sendError, sendSuccess } from "../libs/sendSuccess.js";
import {
  getbookbyid,
  fbookquery,
  getallbooks,
} from "../services/book.services.js";

export function getbooksc(req, res) {
  const { category, price, author, color } = req.query;

  if (!category && !price && !author && !color) {
    const all = getallbooks();

    return  sendSuccess(res, 200, "Book fetched .!", all);
  }

  const result = fbookquery(author, category, price, color);

  if (result.length === 0) {
    return sendError(res,404,"Books not found")

  }

   return  sendSuccess(res, 200, "Book fetched successfully.!", result);
}

export function getbooksbyid(req, res) {
  const id = req.params.id;

  console.log("ID:", id);

  const book = getbookbyid(id);

  console.log("BOOK:", book);

  if (!book) {
    console.log("BOOK NOT FOUND");

    return sendError(res, 404, "Book not found");
  }

  return sendSuccess(
    res, 200, "Book fetched successfully by id",  book
  );
}

export function searchbook(req, res, next) {
  try {
    const { category, price, author, color } = req.body;

    const result = fbookquery(author, category, price, color);

    if (result.length === 0) {
      return sendError(res,404,"Books not found")
    }

   return sendSuccess(res,200,"books fetched sucessfulyy by using post method ",result )
  } catch (error) {
    next(error);
  }
}
export function  queryBookMethod(req,res,next){
  try{
    const {author ,category ,price,color}=req.body;
    const result=fbookquery(author,category,price,color);
    if (result.length===0){
      return sendError(res,404,"Books not found")
    }
    return sendSuccess(res,200,"Books Fetched Sucessfully using Query Method ",result)
  }
  catch(error){
    next(error);
  }
  
}
