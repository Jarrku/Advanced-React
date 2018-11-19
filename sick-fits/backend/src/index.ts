import { config } from "dotenv";
config({ path: ".env" });
import * as cookieParser from 'cookie-parser';
import createServer from "./createServer";
import { verify } from "jsonwebtoken";

const server = createServer();

server.express.use(cookieParser());

//decode the JWT so we can the user id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if(token) {
    const { userId } = verify(token, process.env.APP_SECRET!) as { userId?: string };
    // put userId on the request for future requests to access
    req.userId = userId;
  }
  next();
});

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
