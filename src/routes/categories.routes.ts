import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/usecases/createCategories';
import { getCategoriesController } from '../modules/cars/usecases/listCategories'

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  const { file } = request
  console.log('File: ', file)
  return response.send('Ok')
});

categoriesRoutes.get('/', (_, response) => getCategoriesController.handle(_, response));

export { categoriesRoutes };
