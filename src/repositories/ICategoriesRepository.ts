import { Category } from "../model/Category";

 
// Criando Interface - Conceito DTO 
interface ICategoriesRepositoryDTO{
  name : String,
  description : String  
}

interface ICategoriesRepository{

  findByName(name : string) : Category;
  list() : Category[];
  create({name,description}:ICategoriesRepositoryDTO) : void;

}

export { ICategoriesRepository,ICategoriesRepositoryDTO }