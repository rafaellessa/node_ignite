import Category from '../../model/Category';
import ICategoriesRepository from './ICategoriesRepository';

interface ICreateCategoryDTO {
  name: string
  description: string
}

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  constructor() {
    this.categories = [];
  }

  public static getInstance() : CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category({
      name, description, created_at: new Date(),
    });

    this.categories.push(category);
  }

  findByName(name: string) {
    const categoryAlreadyExists = this.categories.find((category) => category.name === name);

    return categoryAlreadyExists;
  }

  getAll() {
    return this.categories;
  }
}
