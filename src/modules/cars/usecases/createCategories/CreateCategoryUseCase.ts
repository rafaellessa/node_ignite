import ICategoriesRepository from '../../repositories/categories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository:ICategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('categoryAlreadyExists');
    }

    this.categoriesRepository.create({ name, description });
  }
}
