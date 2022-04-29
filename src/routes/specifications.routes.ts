import {  request, response, Router } from "express";
import { SpecificationsRepository } from "../cars/repositories/SpecificarionsRepository";
import { CreateSpecificationsService } from "../cars/services/CreateSpecificationsService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/",(request, response) =>{
  const {name, description} = request.body

  const createSpecificationService = new CreateSpecificationsService(specificationsRepository)
  createSpecificationService.execute({name,description})
  return response.status(201).json({ message : "created"})
})

specificationsRoutes.get("/", (request,response) =>{

  const all = specificationsRepository.list();
  return response.status(201).json({all})
})


export { specificationsRoutes }