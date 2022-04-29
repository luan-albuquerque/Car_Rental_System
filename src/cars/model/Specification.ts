import {  v4 as uuid } from "uuid"

class Specification { 
 
 id?: String;
 name : String;
 description: String;
 created_at: Date;

 constructor(){
   if(!this.id){
     this.id = uuid(); 
   }
 }



}

export { Specification }