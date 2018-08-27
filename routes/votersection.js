const express = require('express');

const router = express.Router();
const VoterSection = require('../db/models').VoterSection;

/*
 * Create new section
 * body: [sectionName]
 */
router.post(`/section/create`, (req, res, next) => {
  VoterSection.create({
    sectionName: req.body.sectionName,
    batchId: req.body.batchId,
  }).then(voterSection => {
    res.status(201).send({
      message: 'New Section has been created',
      added: voterSection,
    });
  }).catch(next);
});

/*
 * List all sections
 */
router.get(`/section`, (req, res, next) => {
  VoterSection.findAll().then(voterSection => {
    res.status(200).send({
      results: voterSection,
    });
  }).catch(next);
});

/*
 * Find a specific section
 * params: [sectionName]
 */
router.get(`/section/:sectionName`, (req, res, next) => {
  VoterSection.findOne({
    where: {
      sectionName: req.params.sectionName,
    }
  }).then(voterSection => {
    res.status(200).send({
      results: voterSection,
    });
  }).catch(next);
});

/*
 * Update a section entry
 * body: [sectionName]
 * params: [sectionName]
 */
router.put(`/section/:sectionName/update`, (req, res, next) => {
  VoterSection.update(
    {
      sectionName: req.body.sectionName,
      batchId: req.body.batchId,
    },
    {
      where: {
        sectionName: req.params.sectionName,
      }
    }
  ).then(voterSection => {
    res.status(200).send({
      message: 'A Section has been updated',
      added: voterSection,
    });
  }).catch(next);
});

/*
 * Delete a section entry
 * params: [sectionName]
 */
router.delete(`/section/:sectionName/delete`, (req, res, next) => {
  VoterSection.destroy({
    where: {
      sectionName: req.params.sectionName,
    }
  }).then(voterSection => {
    res.status(204).send({
      message: 'A Section has been deleted',
    });
  }).catch(next);
});

module.exports = router;