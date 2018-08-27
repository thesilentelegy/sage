const express = require('express');

const router = express.Router();
const VoterBatch = require('../db/models').VoterBatch;

/*
 * Create new batch
 * body: [batchName]
 */
router.post(`/batch/create`, (req, res, next) => {
  VoterBatch.create({
    batchName: req.body.batchName,
  }).then(voterBatch => {
    res.status(201).send({
      message: 'New Batch has been created',
      added: voterBatch,
    });
  }).catch(next);
});

/*
 * List all batches
 */
router.get(`/batch`, (req, res, next) => {
  VoterBatch.findAll().then(voterBatch => {
    res.status(200).send({
      results: voterBatch,
    });
  }).catch(next);
});

/*
 * Find a specific batch
 * params: [batchName]
 */
router.get(`/batch/:batchName`, (req, res, next) => {
  VoterBatch.findOne({
    where: {
      batchName: req.params.batchName,
    }
  }).then(voterBatch => {
    res.status(200).send({
      results: voterBatch,
    });
  }).catch(next);
});

/*
 * Update a batch entry
 * body: [batchName]
 * params: [batchName]
 */
router.put(`/batch/:batchName/update`, (req, res, next) => {
  VoterBatch.update(
    {
      batchName: req.body.batchName,
    },
    {
      where: {
        batchName: req.params.batchName,
      }
    }
  ).then(voterBatch => {
    res.status(200).send({
      message: 'A Batch has been updated',
      added: voterBatch,
    });
  }).catch(next);
});

/*
 * Delete a batch entry
 * params: [batchName]
 */
router.delete(`/batch/:batchName/delete`, (req, res, next) => {
  VoterBatch.destroy({
    where: {
      batchName: req.params.batchName,
    }
  }).then(voterBatch => {
    res.status(204).send({
      message: 'A Batch has been deleted',
    });
  }).catch(next);
});

module.exports = router;
