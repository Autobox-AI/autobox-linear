import { OpenAPIRegistry, RouteConfig } from "@asteasolutions/zod-to-openapi";

const registry = new OpenAPIRegistry();

registry.registerComponent("securitySchemes", "BasicAuth", {
  type: "http",
  scheme: "basic",
  description: "placeholder.",
});

export const getPingRouteConfig: RouteConfig = {
  method: "get",
  path: "/ping",
  summary: "Get ping",
  description: "",
  tags: ["ping"],
  security: [{ BasicAuth: [] }],
  responses: {
    200: {
      description: "Ok",
    },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
};

registry.registerPath(getPingRouteConfig);

export { registry };
