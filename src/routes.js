import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();


routes.get('/', async (req, res) => {
   const user = await User.create({
      name: 'Diego Cavalcanti',
      link_photo: 'https://avatars.githubusercontent.com/u/50845110?v=4',
      whatsapp: '75988971606',
      estado: 'Ba',
      cidade: 'Paulo Afonso',
      email: 'diegotimao1104@gmail.com',
      password_hash: '123',
   });

   return res.json(user);
});


export default routes;