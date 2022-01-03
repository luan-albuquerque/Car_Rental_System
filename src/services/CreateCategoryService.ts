import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest{ 
   name : String
   description : String
}

class CreateCategoryService { 


  constructor (private categoriesRepository : CategoriesRepository) {

 }

 execute({name,description} : IRequest){
  

  const categoryAlreadyExist = this.categoriesRepository.findName(name)  
      
  if(categoryAlreadyExist){
    throw new Error("Category Already Exists")
  }
  
  this.categoriesRepository.create({description, name })

 }


}

export { CreateCategoryService }