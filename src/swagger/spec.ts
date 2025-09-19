import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./registry";

export const swaggerSpec = new OpenApiGeneratorV3(registry.definitions).generateDocument({
  openapi: "3.0.3",
  info: {
    title: "Autobox API",
    version: "1.0.0",
    description: "Autobox backend API documentation",
  },
});
