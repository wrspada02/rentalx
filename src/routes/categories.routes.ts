import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepositories.findyByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ message: "Category Already Exists" });
  }

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepositories.list();

  return response.json(allCategories);
});

export { categoriesRoutes };
