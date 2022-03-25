import express, { Express, Request, Response } from 'express';
import routes from './router';
import { notFound, errorHandler } from './error-handler'

const router: Express = express();

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use('/', routes);

// Error handling
// router.use((err: Error, req: Request, res: Response) => {
//   if (err) {
//     return res.status(404).json({
//       message: err.message
//     });
//   }
//   else {
//     const error = new Error('not found');
//     return res.status(404).json({
//       message: error.message
//     });
//   }
// });

router.use(notFound)
router.use(errorHandler)

export = router
