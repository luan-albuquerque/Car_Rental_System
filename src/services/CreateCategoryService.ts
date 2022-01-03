import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest{ 
   name : string
   description : string
}

class CreateCategoryService { 

  constructor (private categoriesRepository : ICategoriesRepository) {

 }

 execute({name,description} : IRequest){
  
  const categoryAlreadyExist = this.categoriesRepository.findByName(name)  
      
  if(categoryAlreadyExist){
    throw new Error("Category Already Exists")
  }
  
  this.categoriesRepository.create({description, name })

 }


}

export { CreateCategoryService }