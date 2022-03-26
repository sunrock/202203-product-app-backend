import express, { Express, Request, Response } from 'express';
import routes from './router';
import { notFound, errorHandler } from './error-handler'

const router: Express = express();

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use('/', routes);

router.use(notFound)
router.use(errorHandler)

export = router
