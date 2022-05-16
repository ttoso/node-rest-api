const express = require('express');
const router =  express.Router();
const Joi = require('@hapi/joi');
const validate = require('express-joi-validate');

const newspaperController = require('../controllers/newspapers');

const newspaperSchema = {
    body: {
        title: Joi.string().required(),
        image: Joi.string().uri().required(),
        link: Joi.string().uri().required(),
        abstract: Joi.string().required(),
        languages: Joi.array().items(Joi.string()).required(),
        publisher: Joi.string().required()
    }
};

const paginationSchema = {
    query: {
        limit: Joi.number(),
        offset: Joi.number()
    }
};

router.get('/', validate(paginationSchema), newspaperController.getNewspapers);

router.get('/:newspaperId', newspaperController.getNewspaperById);

router.post('/', validate(newspaperSchema), newspaperController.createNewspaper);

router.patch('/:newspaperId', validate(newspaperSchema), newspaperController.updateNewspaper);

router.delete('/:newspaperId', newspaperController.deleteNewspaperById);

module.exports = router;