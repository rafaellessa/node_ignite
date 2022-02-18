import ISpecificationsRepository from '../../repositories/specifications/ISpecificationsRepository';

interface IRequest {
  name:string
  description: string
}

export default class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('specification already exists')
    }

    this.specificationsRepository.create({ name, description })
  }
}
