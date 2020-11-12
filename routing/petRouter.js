const express = require('express')
const router = express.Router();
const Pets = require('./petModel.js')


router.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });
  
router.get("/pets", (req, res) => {
    Pets.getAll()
      .then(pets => {
        res.status(200).json(pets);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.post("/pets", (req, res) => {
    Pets.insert()
      .then(pets => {
        res.status(200).json(pets);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.delete("/pets", (req, res) => {
    Pets.remove()
      .then(pets => {
        res.status(200).json(pets);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  module.exports = router;