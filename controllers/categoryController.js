const CategoryService = require("../services/categoryService");

const getAllCategories = async (req, res) => {
    const allCategories = await CategoryService.getAllCategories();

    if (allCategories)
        res.status(200).send({ status: "OK", data: allCategories });
    else
        res.status(400).send({ status: "FAILED", data: allCategories });
};

const getCategory = async (req, res) => {
    let id = req.params.categoryId;
    try {
        const category = await CategoryService.getCategory(id);
        res.status(200).send({ status: "OK", data: category });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createCategory = async (req, res) => {
    const { body } = req;
    const createdCategory = await CategoryService.createCategory(body.name);
    if (createdCategory)
        res.status(201).send({ status: "OK", data: createdCategory });
    else
        res.status(400).send({ status: "FAILED", data: createdCategory });
};

const updateCategory = async (req, res) => {
    let id = req.params.categoryId;
    let { name } = req.body;
    const updatedCategory = await CategoryService.updateCategory(id, name);
    if (updatedCategory)
        res.status(200).send({ status: "OK", data: updatedCategory });
    else
        res.status(400).send({ status: "FAILED", data: updatedCategory });
};

const deleteCategory = async (req, res) => {
    let id = req.params.categoryId;
    const deletedCategory = await CategoryService.deleteCategory(id);
    if (deletedCategory)
        res.status(200).send({ status: "OK", data: deletedCategory });
    else
        res.status(400).send({ status: "FAILED", data: deletedCategory });
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};