import express from 'express';
import * as homeController from '../controllers/homeController';
import * as usersController from '../controllers/usersController';

const webRoutes = express.Router();
webRoutes.get('/', homeController.index);

webRoutes.get('/users', usersController.index);

const routes = express.Router();
routes.use('/', webRoutes);

export default routes;
