const express = require('express');

const router = express.Router();
const VoteStore = require('../db/models').VoteStore;

/*
 * Create new vote store
 * body: [currentVotes, voterSection, candidate]
 */
router.post(`/votes/create`, (req, res, next) => {
  VoteStore.create({
    currentVotes: req.body.currentVotes,
    voterSection: req.body.voterSection,
    candidate: req.body.candidate,
  }).then(voteStore => {
    res.status(201).send({
      message: 'New VoteStore has been created',
      added: voteStore,
    });
  }).catch(next);
});

/*
 * List all vote stores
 */
router.get(`/votes`, (req, res, next) => {
  VoteStore.findAll().then(voteStore => {
    res.status(200).send({
      results: voteStore,
    });
  }).catch(next);
});

/*
 * Find a specific vote store
 * params: [id]
 */
router.get(`/votes/:id`, (req, res, next) => {
  VoteStore.findOne({
    where: {
      id: req.params.id,
    }
  }).then(voteStore => {
    res.status(200).send({
      results: voteStore,
    });
  }).catch(next);
});

/*
 * Update a vote store entry
 * body: [currentVotes, voterSection, candidate]
 * params: [id]
 */
router.put(`/votes/:id/update`, (req, res, next) => {
  VoteStore.update(
    {
      currentVotes: req.body.currentVotes,
      voterSection: req.body.voterSection,
      candidate: req.body.candidate,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  ).then(voteStore => {
    res.status(200).send({
      message: 'A VoteStore has been updated',
      added: voteStore,
    });
  }).catch(next);
});

/*
 * Delete a vote store entry
 * params: [id]
 */
router.delete(`/votes/:id/delete`, (req, res, next) => {
  VoteStore.destroy({
    where: {
      id: req.params.id,
    }
  }).then(voteStore => {
    res.status(204).send({
      message: 'A VoteStore has been deleted',
    });
  }).catch(next);
});

module.exports = router;
