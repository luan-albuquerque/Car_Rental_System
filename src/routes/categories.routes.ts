import { Router } from 'express'
import { CategoriesRepository } from '../cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../cars/userCase/CreateSpecification/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req,res) => {

     const { name,description } = req.body
     const createCategoryService = new CreateCategoryService(categoriesRepository);

     createCategoryService.execute({name,description});
    
     return res.status(201).send();
   
})  


categoriesRoutes.get("/",(req, res)=>{
   
  const all = categoriesRepository.list();
     
  return res.status(201).json(all)
    

})



export { categoriesRoutes }