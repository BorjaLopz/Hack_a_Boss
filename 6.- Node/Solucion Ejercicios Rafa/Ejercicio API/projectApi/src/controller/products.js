const getAllProductsController = async (req, res) => {
    try {
        const productsRepository = req.repositoryFactory.build('products')
        const products = await productsRepository.getAllProducts();
        res.send(products)
    } catch(e) {
        res.status(500).send(e)
    }
}

module.exports = { getAllProductsController }