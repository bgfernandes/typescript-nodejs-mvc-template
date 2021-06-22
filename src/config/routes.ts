import express from 'express';
import * as homeController from '../controllers/homeController';

const webRoutes = express.Router();
webRoutes.get('/', homeController.index);

const routes = express.Router();
routes.use('/', webRoutes);

export default routes;
