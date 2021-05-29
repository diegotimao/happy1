import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
   return res.json({ message: 'Olá somos a Happy.' });
});


export default routes;