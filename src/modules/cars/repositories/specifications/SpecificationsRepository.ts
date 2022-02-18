import Specification from '../../model/Specification';
import ISpecificationsRepository, { ICreateSpecificationDTO } from './ISpecificationsRepository';

export default class SpecificationsRepository implements ISpecificationsRepository {
  constructor() {
    this.specifications = []
  }
  private static INSTANCE: SpecificationsRepository
  private specifications: Specification[]

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description, created_at: new Date() })
    this.specifications.push(specification)
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find((item) => item.name === name)
    return specification
  }

  getAll(): Specification[] {
    return this.specifications
  }
}
