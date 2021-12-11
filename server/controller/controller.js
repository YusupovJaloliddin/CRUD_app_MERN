let Userdb = require("../model/model");
const express = require("express");
const app = express();
app.use(express.json());
//create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content:can not be empty" });
    return;
  }
  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the database
  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while create operation",
      });
    });
};
//TODO improve efficiency
//retview and return all users/retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    // console.log(id);
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .sort("name")
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

//update a new idetfeed user by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Cannot update user with ${id}.Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Eror update user information" });
    });
};

//delete
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          mseesage: `Cannot Delete with id ${id}.Maybe id is writing`,
        });
      } else {
        res.send({ message: "User was delete succesfully!!!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
