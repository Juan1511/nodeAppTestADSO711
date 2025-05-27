// Enlazamos nuestro servicio
const ArticleService = require("../services/articleService");

const getAllArticles = async (req, res) => {
    const allArticles = await ArticleService.getAllArticles();

    if (allArticles)
        res.status(200).send({ status: "OK", data: allArticles });
    else
        res.status(400).send({ status: "FAILED", data: allArticles });
};

const getArticle = async (req, res) => {
    let id = req.params.articleId;
    try {
        const Article = await ArticleService.getArticle(id);
        res.status(200).send({ status: "OK", data: Article });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createArticle = async (req, res) => {
    const { body } = req;
    const createdArticle = await ArticleService.createArticle(body.title, body.content, body.userId);
    if (createdArticle)
        res.status(201).send({ status: "OK", data: createdArticle });
    else
        res.status(400).send({ status: "FAILED", data: createdArticle });
};

const updateArticle = async (req, res) => {
    let id = req.params.articleId;
    let { title, content, userId } = req.body;
    const updatedArticle = await ArticleService.updateArticle(id, title, content, userId);
    if (updatedArticle)
        res.status(200).send({ status: "OK", data: updatedArticle });
    else
        res.status(400).send({ status: "FAILED", data: updatedArticle });
};

const deleteArticle = async (req, res) => {
    let id = req.params.articleId;
    const deletedArticle = await ArticleService.deleteArticle(id);
    if (deletedArticle)
        res.status(200).send({ status: "OK", data: deletedArticle });
    else
        res.status(400).send({ status: "FAILED", data: deletedArticle });
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};