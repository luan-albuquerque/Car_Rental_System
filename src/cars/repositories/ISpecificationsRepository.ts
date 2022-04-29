import { Specification } from "../model/Specification";

interface ISpecificationsRepositoryDTO{
  name: string,
  description: string
}
interface ISpecificationsRepository{

    create({name,description}:ISpecificationsRepositoryDTO): void;
    list(): Specification[];
    findByName(name:string): Specification;


}

export { ISpecificationsRepository,ISpecificationsRepositoryDTO}