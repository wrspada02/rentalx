import { Category } from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoryRepository";

class PostgressCategoriesRepositories implements ICategoriesRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgressCategoriesRepositories };
