import ICategoriesRepository from '../../repositories/categories/ICategoriesRepository';

export default class GetCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute() {
    const categories = this.categoriesRepository.getAll()
    return categories
  }
}
