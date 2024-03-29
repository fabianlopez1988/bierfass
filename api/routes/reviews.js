const express = require('express');
const router = express.Router();
const ReviewProduct = require('../models/ReviewProduct');


// all reviews
router.get('/:productId', (req, res) => {
  ReviewProduct.findAll({ where: { productId: req.params.productId } }).then(
    (cart) => {
      res.send(cart);
    }
  );
});


//send review
router.post('/:productId', (req, res) => {

  console.log(req.body);

  ReviewProduct.findOne({ where: { userId: req.body.userId, productId: req.params.productId } }).then(
    (result) => {
      
      if (result === null) {
        ReviewProduct.create(req.body).then((user) =>
    
          res.status(201).send(user)
        );
      } else {
        res.status(401).send();
      }
    }
  );
});

module.exports = router;
