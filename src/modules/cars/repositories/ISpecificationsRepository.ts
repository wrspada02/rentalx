import { Specification } from "../model/Specification";

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDto): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDto };
