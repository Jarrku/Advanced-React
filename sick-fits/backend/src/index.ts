import { config } from "dotenv";
config({ path: ".env" });

import createServer from "./createServer";
import * as compression from "compression";

const server = createServer();

server.use(compression());

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
