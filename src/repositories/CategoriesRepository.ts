import { Category } from '../model/Category';

// Criando Interface - Conceito DTO 
interface ICategoriesRepository{
    name : String,
    description : String  
}
 

class CategoriesRepository {
  // Atributo de Class 
  private categories: Category[];
  
  //Inicializando 
  constructor(){
     this.categories = []
  }

  //Function Create
  create({name , description}: ICategoriesRepository):void{
 
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
  findName(name : String): Category{
    
     const result = this.categories.find(caregories=> caregories.name === name )
     return result;
  }

  
}

export { CategoriesRepository }