import express from "express";
import dotenv from "dotenv";

import router from "./routes/books.routes.js";

import { errorHandler, errorHandlerNotFound } from "./middleware/ErrorHandler.midleware.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/books", router);

app.use(errorHandler);
app.use(errorHandlerNotFound);
app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Healthy Server",
//   });
// });

// app.get("/books", (req, res) => {
//   const result = books;

//   res.status(200).json({
//     message: "Book fetched",
//     data: result,
//   });
// });

// // Query paramater
// app.get("/books", (req, res) => {
//   const { category, price } = req.query;
//   let result = books;
//   if (category) {
//     result = result.filter((book) => book.category === category);
//   }
//   if (price) {
//     result = result.filter((book) => book.price >= Number(price));
//   }
//   res.status(200).json({
//     message: "Book fetched",
//     data: result,
//   });
// });


