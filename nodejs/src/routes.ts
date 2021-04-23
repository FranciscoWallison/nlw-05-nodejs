import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';
import { AnswerController } from './controllers/AnswerController';
const answerController = new AnswerController();

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

routes.get('/answers/:value', answerController.execute);
routes.get('/answers', answerController.showNps);

export { routes };