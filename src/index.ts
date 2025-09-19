import dotenv from "dotenv";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { logger } from "./config";
import { errorHandler, requestMetrics, responseHandler } from "./middlewares";
import routes from "./routes";
import { swaggerSpec } from "./swagger";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestMetrics);
app.use(responseHandler);
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL || "http://localhost:7000", "http://localhost:8888"],
//     methods: ["GET", "POST"],
//   })
// );

// Swagger UI
// @ts-ignore - Bypass type checking for swagger-ui-express compatibility
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/", routes);

// Error handler
app.use(errorHandler);

app.listen(PORT, async () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
  logger.info(`Swagger UI at http://localhost:${PORT}/swagger`);
});

export default app;
