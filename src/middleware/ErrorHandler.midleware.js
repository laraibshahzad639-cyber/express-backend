export function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    status: false,
    message: "something went wrong",
    body: null,
  });
}

export function errorHandlerNotFound(req, res, next) {
    
     res.status(404).json({ status: false, message: "not found ",
         body: null, 
        }); }