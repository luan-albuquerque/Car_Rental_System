import { Category } from '../model/Category';
import { ICategoriesRepository,ICategoriesRepositoryDTO } from './ICategoriesRepository';



class CategoriesRepository implements ICategoriesRepository {
  // Atributo de Class 
  private categories: Category[];
  
  //Inicializando 
  constructor(){
     this.categories = []
  }

  //Function Create
  create({name , description}:ICategoriesRepositoryDTO) : void{
 
  const category = new Category();


  Object.assign(category,{   
      name,
      description,
      created_at: new Date()
      
    })
       
     this.categories.push(category)
    //  console.log(category);
     
  }
   
  list(): Category[]{
    
    return this.categories

  }
  findByName(name : String): Category{
    
     const result = this.categories.find(caregories=> caregories.name === name )
     return result;
  }

  
}

export { CategoriesRepository }