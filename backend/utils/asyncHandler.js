// const asyncHandler = (requestHandler) => {
// return (req,res,next) => {
//     Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error))
// }
// }
// export{asyncHandler}

export default function asyncHandler(fn) {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
  