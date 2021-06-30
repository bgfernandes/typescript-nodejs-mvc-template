import express from 'express';
import * as homeController from '../controllers/homeController';
import * as usersController from '../controllers/usersController';
import * as loginController from '../controllers/loginController';

const webRoutes = express.Router();
webRoutes.get('/', homeController.index);

webRoutes.get('/users', usersController.index);
webRoutes.get('/users/me', usersController.showCurrentUser);

webRoutes.get('/login', loginController.index);
webRoutes.use('/login/google', loginController.googleLoginRouter);
webRoutes.use('/login/logout', loginController.logout);

const routes = express.Router();
routes.use('/', webRoutes);

export default routes;
