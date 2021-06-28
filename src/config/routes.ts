import express from 'express';
import * as homeController from '../controllers/homeController';
import * as usersController from '../controllers/usersController';
import * as loginController from '../controllers/loginController';

const webRoutes = express.Router();
webRoutes.get('/', homeController.index);

webRoutes.get('/users', usersController.index);

webRoutes.get('/login', loginController.index);

const routes = express.Router();
routes.use('/', webRoutes);

export default routes;
