
const Router = require('express');
const categoryController = require('../../controllers/categoryController');
const router = Router(); // Llamamos al método Router de Express

// req -> request -> En request llegan los datos del body
// res -> response -> Se envían los datos hacia el cliente

router.get('/', categoryController.getAllCategories);

router.get('/:categoryId', categoryController.getCategory);

router.post('/', categoryController.createCategory);

router.put('/:categoryId', categoryController.updateCategory);

router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;