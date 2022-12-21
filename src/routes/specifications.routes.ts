import { Router } from "express";

import { createSpecificationController } from "../modules/cars/use-cases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
