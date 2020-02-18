var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function(req, res, next) {
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM users WHERE id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id/vinyls", function(req, res, next) {
  db(`SELECT * FROM vinyls WHERE user_id= "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", function(req, res, next) {
  db(
    `INSERT INTO users (first_name, last_name, location) VALUES("${req.body.first_name}","${req.body.last_name}","${req.body.location}" );`
  );
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req, res, next) {
  console.log("test");
  console.log(req.body);
  db(
    `UPDATE users SET first_name="${req.body.firstname}" , last_name="${req.body.lastname}" ,   
   location="${req.body.location}"
    
    WHERE id="${req.params.id}";`
  );
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM users WHERE id="${req.params.id}"`);
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
