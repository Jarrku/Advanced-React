// let's go!
import { config } from 'dotenv';
config({ path: '.env' });
import createServer from './createServer';
// import db from './db';

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`);
});
