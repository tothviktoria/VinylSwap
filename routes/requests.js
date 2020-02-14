var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function(req, res, next) {
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM requests WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", function(req, res, next) {
  db(
    `INSERT INTO requests (status) VALUES("${req.body.status}") WHERE vinyl_id=3;`
  );
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req, res, next) {
  db(
    `UPDATE requests SET status="${req.body.status}" WHERE id="${req.params.id}";`
  );
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM requests WHERE id="${req.params.id}"`);
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
