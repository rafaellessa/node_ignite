import CreateSpecificationsController from './CreateSpecificationsController';
import CreateSpecificationsUseCase from '../createSpecifications/CreateSpecificationsUseCase';
import SpecificationsRepository from '../../repositories/specifications/SpecificationsRepository';

const specificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository)
const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase)

export { createSpecificationsController }
