var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function(req, res, next) {
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM vinyls WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", function(req, res, next) {
  db(
    `INSERT INTO vinyls (vinyl_title,genre,url,user_id) VALUES("${req.body.title}","${req.body.genre}","${req.body.url}",1);`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req, res, next) {
  db(
    `UPDATE vinyls SET vinyl_title="${req.body.title}",genre="${req.body.genre}",url="${req.body.url}" WHERE id="${req.params.id}";`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM vinyls WHERE id="${req.params.id}"`);
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
