import { Request, Response } from 'express'
import CreateSpecificationsUseCase from '../createSpecifications/CreateSpecificationsUseCase';

export default class CreateSpecificationsController {
  constructor(private createSpecificationsUseCase: CreateSpecificationsUseCase) { }

  handle(request: Request, response:Response) {
    try {
      const { name, description } = request.body

      this.createSpecificationsUseCase.execute({ name, description })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
