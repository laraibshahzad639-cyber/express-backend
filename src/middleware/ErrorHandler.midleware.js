export function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    status: false,
    message: "something went wrong",
    body: null,
  });
}
