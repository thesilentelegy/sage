const express = require('express');

const router = express.Router();
const Candidate = require('../db/models').Candidate;

/*
 * Create new candidate
 * body: [firstName, lastName, profileUrl, party, position]
 */
router.post(`/candidate/create`, (req, res, next) => {
  Candidate.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profileUrl: req.body.profileUrl,
    party: req.body.party,
    position: req.body.position,
  }).then(candidate => {
    res.status(201).send({
      message: 'New Candidate has been created',
      added: candidate,
    });
  }).catch(next);
});

/*
 * List all parties
 */
router.get(`/candidate`, (req, res, next) => {
  Candidate.findAll().then(candidate => {
    res.status(200).send({
      results: candidate,
    });
  }).catch(next);
});

/*
 * Find a specific candidate
 * params: [id]
 */
router.get(`/candidate/:id`, (req, res, next) => {
  Candidate.findOne({
    where: {
      id: req.params.id,
    }
  }).then(candidate => {
    res.status(200).send({
      results: candidate,
    });
  }).catch(next);
});

/*
 * Update a candidate entry
 * body: [firstName, lastName, profileUrl, party, position]
 * params: [id]
 */
router.put(`/candidate/:id/update`, (req, res, next) => {
  Candidate.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profileUrl: req.body.profileUrl,
      party: req.body.party,
      position: req.body.position,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  ).then(candidate => {
    res.status(200).send({
      message: 'A Candidate has been updated',
      added: candidate,
    });
  }).catch(next);
});

/*
 * Delete a candidate entry
 * params: [id]
 */
router.delete(`/candidate/:id/delete`, (req, res, next) => {
  Candidate.destroy({
    where: {
      id: req.params.id,
    }
  }).then(candidate => {
    res.status(204).send({
      message: 'A Candidate has been deleted',
    });
  }).catch(next);
});

module.exports = router;
