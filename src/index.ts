require('dotenv').config();

import server from './server';

server.listen(process.env.PORT|| 3333, () => {
  console.log('> Server up and running...')
})