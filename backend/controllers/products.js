const {
  getEveryProduct,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProductById,
} = require("../services/products");

function getAllProducts(req, res) {
  try {
    const products = getEveryProduct();
    res.send(products);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getProduct(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const product = getProductById(id);
      res.send(product);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postProduct(req, res) {
  try {
    const newProduct = req.body;

    if (req.body.name) {
      addNewProduct(newProduct);
      res.status(201);
      res.send("Produto adicionado com sucesso");
    } else {
      res.status(422);
      res.send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchProduct(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      editProduct(body, id);
      res.send("Produto atualizado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteProduct(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteProductById(id);
      res.send("Produto deletado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
};
