const express = require('express');

const router = express.Router();
const User = require('../db/models').User;

/*
 * Create new user
 * body: [username, password, role, active, sectionId]
 */
router.post(`/user/create`, (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    active: req.body.active,
    sectionId: req.body.sectionId,
  }).then(user => {
    res.status(201).send({
      message: 'New User has been created',
      added: user,
    });
  }).catch(next);
});

/*
 * List all parties
 */
router.get(`/user`, (req, res, next) => {
  User.findAll().then(user => {
    res.status(200).send({
      results: user,
    });
  }).catch(next);
});

/*
 * Find a specific user
 * params: [username]
 */
router.get(`/user/:username`, (req, res, next) => {
  User.findOne({
    where: {
      username: req.params.username,
    }
  }).then(user => {
    res.status(200).send({
      results: user,
    });
  }).catch(next);
});

/*
 * Update a user entry
 * body: [username, password, role, active, sectionId]
 * params: [username]
 */
router.put(`/user/:username/update`, (req, res, next) => {
  User.update(
    {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      active: req.body.active,
      sectionId: req.body.sectionId,
    },
    {
      where: {
        username: req.params.username,
      }
    }
  ).then(user => {
    res.status(200).send({
      message: 'A User has been updated',
      added: user,
    });
  }).catch(next);
});

/*
 * Delete a user entry
 * params: [username]
 */
router.delete(`/user/:username/delete`, (req, res, next) => {
  User.destroy({
    where: {
      username: req.params.username,
    }
  }).then(user => {
    res.status(204).send({
      message: 'A User has been deleted',
    });
  }).catch(next);
});

module.exports = router;
