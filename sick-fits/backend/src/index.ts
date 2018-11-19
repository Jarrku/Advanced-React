import { config } from "dotenv";
config({ path: ".env" });
import * as cookieParser from 'cookie-parser';
import createServer from "./createServer";

const server = createServer();

server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
