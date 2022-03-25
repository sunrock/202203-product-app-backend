import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error('Page Not Found');
  next(error);
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    code: res.statusCode
    // stack: err.stack
  });
}