const express = require('express');

const router = express.Router();
const CandidatePosition = require('../db/models').CandidatePosition;

/*
 * Create new position
 * body: [name, level]
 */
router.post(`/position/create`, (req, res, next) => {
  CandidatePosition.create({
    name: req.body.name,
    level: req.body.level,
  }).then(candidatePosition => {
    res.status(201).send({
      message: 'New Position has been created',
      added: candidatePosition,
    });
  }).catch(next);
});

/*
 * List all parties
 */
router.get(`/position`, (req, res, next) => {
  CandidatePosition.findAll().then(candidatePosition => {
    res.status(200).send({
      results: candidatePosition,
    });
  }).catch(next);
});

/*
 * Find a specific position
 * params: [name]
 */
router.get(`/position/:name`, (req, res, next) => {
  CandidatePosition.findOne({
    where: {
      name: req.params.name,
    }
  }).then(candidatePosition => {
    res.status(200).send({
      results: candidatePosition,
    });
  }).catch(next);
});

/*
 * Update a position entry
 * body: [name, level]
 * params: [name]
 */
router.put(`/position/:name/update`, (req, res, next) => {
  CandidatePosition.update(
    {
      name: req.body.name,
      level: req.body.level,
    },
    {
      where: {
        name: req.params.name,
      }
    }
  ).then(candidatePosition => {
    res.status(200).send({
      message: 'A Position has been updated',
      added: candidatePosition,
    });
  }).catch(next);
});

/*
 * Delete a position entry
 * params: [name]
 */
router.delete(`/position/:name/delete`, (req, res, next) => {
  CandidatePosition.destroy({
    where: {
      name: req.params.name,
    }
  }).then(candidatePosition => {
    res.status(204).send({
      message: 'A Position has been deleted',
    });
  }).catch(next);
});

module.exports = router;
