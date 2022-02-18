import { Response, Request } from 'express';
import GetCategoriesUseCase from './GetCategoriesUseCase';

export default class GetCategoriesController {
  constructor(private getCategoriesUseCase: GetCategoriesUseCase) {}
  handle(_:Request, response: Response) {
    try {
      const categories = this.getCategoriesUseCase.execute()

      return response.json({ categories })
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
