var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function(req, res, next) {
  res.send("Welcome to vinyls swap");
});
/* GET users listing. */

router.get("/vinyls", function(req, res, next) {
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/requests", function(req, res, next) {
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/requests/:id", function(req, res, next) {
  db(`SELECT * FROM requests WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/users", function(req, res, next) {
  db(`SELECT * FROM users ORDER BY id ASC;`)
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

router.get("/users/:id", function(req, res, next) {
  db(`SELECT * FROM users WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/users/:id/vinyls", function(req, res, next) {
  db(`SELECT vinyls FROM users WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/vinyls", function(req, res, next) {
  db(
    `INSERT INTO vinyls (vinyl_title,genre,) VALUES("${req.body.title}","${req.body.genre}")`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/users", function(req, res, next) {
  db(`INSERT INTO users (name) VALUES("${req.body.name}")`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/requests", function(req, res, next) {
  db(`INSERT INTO requests (status) VALUES("${req.body.status}")`);
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/vinyls/:id", function(req, res, next) {
  db(
    `UPDATE vinyls SET vinyl_title="${req.body.title}",genre="${req.body.genre}"`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/users/:id", function(req, res, next) {
  db(`UPDATE users SET name="${req.body.name}"`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/requests/:id", function(req, res, next) {
  db(`UPDATE requests SET status="${req.body.status}"`);
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/vinyls/:id", function(req, res, next) {
  db(`DELETE FROM vinyls WHERE id="${req.params.id}"`);
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/users/:id", function(req, res, next) {
  db(`DELETE FROM users WHERE id="${req.params.id}"`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/requests/:id", function(req, res, next) {
  db(`DELETE FROM requests WHERE id="${req.params.id}"`);
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
module.exports = router;
