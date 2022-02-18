import { Router } from 'express';
import SpecificationsRepository from '../modules/cars/repositories/specifications/SpecificationsRepository';
import { createSpecificationsController } from '../modules/cars/usecases/createSpecifications';

const specificationsRoutes = Router()
const specificationsRepository = SpecificationsRepository.getInstance()

specificationsRoutes.get('/', (_, response) => {
  const specifications = specificationsRepository.getAll()

  return response.json({ specifications })
})

specificationsRoutes.post('/', (request, response) => createSpecificationsController.handle(request, response))

export { specificationsRoutes };
