const express = require('express');
const router = express.Router();
const Products = require('../db/models/products');
const Categories = require('../db/models/categories');

router.get('/', (req, res) => {
  Categories.findAll().then(categories => {
    res.send(categories);
  });
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Categories.findOne({
    where: {
      id: id,
    },
    include: [{ model: Products }],
  }).then(category => {
    res.send(category.products);
  });
});
router.post('/', (req, res) => {
  const name = req.body.name;
  Categories.create({
    name: name,
  })
    .then(newCategory => {
      res.send(newCategory);
    })
    .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Categories.destroy({
    where: { id: id },
  })
    .then(deletedCategory => {
      res.json(deletedCategory);
    })
    .catch(res.send);
});

module.exports = router;
