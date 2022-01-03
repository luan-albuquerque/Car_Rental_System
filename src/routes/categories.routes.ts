import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categorieRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req,res) => {

     const { name,description } = req.body
     const createCategoryService = new CreateCategoryService(categorieRepository);

     createCategoryService.execute({name,description});
    
     return res.status(201).send();
   
})  


categoriesRoutes.get("/",(req, res)=>{
   
  const all = categorieRepository.list();
     
  return res.status(201).json(all)
    

})



export { categoriesRoutes }