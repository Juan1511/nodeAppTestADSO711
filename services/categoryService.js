const db = require('../models');

const getAllCategories = async () => {
    try {
        let categories = await db.Category.findAll({
            include: {
                model: db.Article,
                as: "articles",
                through: { attributes: [] } // Esto evita que se muestren los datos de la tabla intermedia
            },
        });
        return categories;
    } catch (error) {
        return error.message || "Failed to get Categories";
    }
};

const getCategory = async (id) => {
    try {
        let category = await db.Category.findByPk(id, {
            include: {
                model: db.Article,
                as: "articles",
                through: { attributes: [] }
            },
        });
        return category;
    } catch (error) {
        throw { status: 500, message: error.message || "Failed to get Category" };
    }
};

const createCategory = async (name) => {
    try {
        let newCategory = await db.Category.create({
            name
        });
        return newCategory;
    } catch (error) {
        return error.message || "Category could not be created";
    }
};

const updateCategory = async (id, name) => {
    try {
        let updatedCategory = await db.Category.update({
            name
        }, {
            where: {
                id,
            }
        });
        return updatedCategory;
    } catch (error) {
        return error.message || "Category could not be updated";
    }
};

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: {
                id,
            }
        });
        return deletedCategory;
    } catch (error) {
        return error.message || "Category could not be deleted";
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};