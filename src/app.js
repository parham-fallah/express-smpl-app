import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { EXPRESS_APP } from "./core/config/index.js";
import { apiLoggerMiddleware, notFoundErrorHandlerMiddleware } from './core/middleware/express-middlewares.js';
import { authValidationMiddleware } from './core/middleware/auth-middlewares.js';

// Backend modules
import { router as userRouter, publicRouter as userPublicRouter } from './modules/user/routes.js';

const app = express();
const serverPort = EXPRESS_APP.port || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

app.use(apiLoggerMiddleware);

app.get('/test', (req, res) => {
  res.json({
    message: 'Express js app is running'
  });
});

// attach routers to express app
app.use('/api/user', authValidationMiddleware, userRouter);
app.use('/api', userPublicRouter);

app.use(notFoundErrorHandlerMiddleware);

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});