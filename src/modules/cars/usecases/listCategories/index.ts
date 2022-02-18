import GetCategoriesController from './GetCategoriesController';
import GetCategoriesUseCase from './GetCategoriesUseCase';
import CategoriesRepository from '../../repositories/categories/CategoriesRepository';

const categoriesRepository = CategoriesRepository.getInstance()
const getCategoriesUseCase = new GetCategoriesUseCase(categoriesRepository)
const getCategoriesController = new GetCategoriesController(getCategoriesUseCase)

export { getCategoriesController }
