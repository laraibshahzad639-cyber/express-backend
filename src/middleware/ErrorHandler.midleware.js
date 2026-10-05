export function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    status: false,
    message: "something went wrong",
    body: null,
  });
}

export function errorHandlerNotFound(err, req, res, next) {
  console.error(err);

  res.status(404).json({
    status: false,
    message: "Book not found ",
    body: null,
  });
}
