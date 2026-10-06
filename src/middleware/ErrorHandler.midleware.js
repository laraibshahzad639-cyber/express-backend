export function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    status: false,
    message: `something went wrong${req.url}`,
    method: `${req.method}`,

    body: null,

  });
}

export function errorHandlerNotFound(req, res) {
  res
    .status(404)
    .json({
      status: false,
      message: `This route ${req.url} is not found`,
      method: `${req.method}`,
    });
}
