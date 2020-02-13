var express = require("express");
var router = express.Router();

/* GET users listing. */

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

router.get("/users/:id", function(req, res, next) {
  db(`SELECT * FROM users WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/users/:id/vinyls", function(req, res, next) {
  db(`SELECT vynils FROM users WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/vinyls/:id/users", function(req, res, next) {
  db(`SELECT users FROM vinyls WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/vinyls", function(req, res, next) {
  db(
    `INSERT INTO vinyls (vinyl_title,genre) VALUES("${req.params.title}","${req.params.genre}")`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/users", function(req, res, next) {
  db(`INSERT INTO users (name) VALUES("${req.params.name}")`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/requests", function(req, res, next) {
  db(`INSERT INTO requests (status) VALUES("${req.params.status}")`);
  db(`SELECT * FROM requests ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/vinyls/:id", function(req, res, next) {
  db(
    `UPDATE vinyls SET vinyl_title="${req.params.title}",genre="${req.params.genre}"`
  );
  db(`SELECT * FROM vinyls ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/users/:id", function(req, res, next) {
  db(`UPDATE users SET name="${req.params.name}"`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/requests/:id", function(req, res, next) {
  db(`UPDATE requests SET status="${req.params.status}"`);
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
