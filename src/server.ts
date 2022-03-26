import express, { Express, NextFunction, Request, Response } from 'express';
import routes from './router';
import { notFound, errorHandler } from './error-handler'

const frontURL = "http://localhost:4200";

const router: Express = express();

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use(function (req: Request, res: Response, next: NextFunction) {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", frontURL);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS")
  next();
});

router.options('*', function (req: Request, res: Response) { res.sendStatus(200); });

router.use('/', routes);

router.use(notFound)
router.use(errorHandler)

export = router
