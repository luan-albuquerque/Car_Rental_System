import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ISpecificationsRepositoryDTO } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
  
  private specifications: Specification[]
  
constructor(){
           this.specifications = []
  }

  create({name,description}:ISpecificationsRepositoryDTO ): void {
     
    const specification = new Specification();
    Object.assign(specification,{
      name,
      description,
      created_at: new Date
    })

    this.specifications.push(specification)
    
  }
  list(): Specification[] {
   return this.specifications
  }

  findByName(name: string): Specification {
   const response =  this.specifications.find(specification => specification.name === name);
   return response;  
  }

}

export { SpecificationsRepository }