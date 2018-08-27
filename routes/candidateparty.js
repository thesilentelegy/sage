const express = require('express');

const router = express.Router();
const CandidateParty = require('../db/models').CandidateParty;

/*
 * Create new party
 * body: [name]
 */
router.post(`/party/create`, (req, res, next) => {
  CandidateParty.create({
    name: req.body.name,
  }).then(candidateParty => {
    res.status(201).send({
      message: 'New Party has been created',
      added: candidateParty,
    });
  }).catch(next);
});

/*
 * List all parties
 */
router.get(`/party`, (req, res, next) => {
  CandidateParty.findAll().then(candidateParty => {
    res.status(200).send({
      results: candidateParty,
    });
  }).catch(next);
});

/*
 * Find a specific party
 * params: [name]
 */
router.get(`/party/:name`, (req, res, next) => {
  CandidateParty.findOne({
    where: {
      name: req.params.name,
    }
  }).then(candidateParty => {
    res.status(200).send({
      results: candidateParty,
    });
  }).catch(next);
});

/*
 * Update a party entry
 * body: [name]
 * params: [name]
 */
router.put(`/party/:name/update`, (req, res, next) => {
  CandidateParty.update(
    {
      name: req.body.name,
    },
    {
      where: {
        name: req.params.name,
      }
    }
  ).then(candidateParty => {
    res.status(200).send({
      message: 'A Party has been updated',
      added: candidateParty,
    });
  }).catch(next);
});

/*
 * Delete a party entry
 * params: [name]
 */
router.delete(`/party/:name/delete`, (req, res, next) => {
  CandidateParty.destroy({
    where: {
      name: req.params.name,
    }
  }).then(candidateParty => {
    res.status(204).send({
      message: 'A Party has been deleted',
    });
  }).catch(next);
});

module.exports = router;
