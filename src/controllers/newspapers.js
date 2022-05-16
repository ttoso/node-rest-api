const httpStatus = require('http-status');

const newspaperService = require('../services/newspapers');
const HttpError = require('../utils/HttpError');

const newspaperController = {
    getNewspapers: async (request, response, next) => {
        const limit = request.query.limit ? request.query.limit : 10
        const offset = request.query.offset ? request.query.offset : 0;

        try {
            const newspapers = await newspaperService.getNewspapers(limit, offset);
            response.send(newspapers);
        } catch (error) {
            next(error);
        }
    },

    getNewspaperById: async (request, response, next) => {
        try {
            const newspaper = await newspaperService.getNewspaperById(request.params.newspaperId);
            if (!newspaper) {
                throw new HttpError(httpStatus.NOT_FOUND, 'Newspaper not found');
            }
            response.send(newspaper);
        } catch (error) {
            next(error);
        }
    },

    createNewspaper: async (request, response, next) => {
        const newspaperToCreate = request.body;

        try {
            const creatednewspaper = await newspaperService.createNewspaper(newspaperToCreate);
            response.status(201);
            response.send(creatednewspaper);
        } catch (error) {
            next(error);
        }
    },

    updateNewspaper: async (request, response, next) => {
        const newspaperToUpdate = request.body;
        const newspaperId = request.params.newspaperId
        try {
            const newspaper = await newspaperService.getNewspaperById(request.params.newspaperId);
            if (!newspaper) {
                throw new HttpError(httpStatus.NOT_FOUND, 'Newspaper not found');
            }

            const updatedNewspaper = await newspaperService.updateNewspaper(newspaperId, newspaperToUpdate);
            response.status(201);
            response.send(updatedNewspaper);
        } catch (error) {
            next(error);
        }
    },

    deleteNewspaperById: async (request, response, next) => {
        try {
            const newspaper = await newspaperService.getNewspaperById(request.params.newspaperId);
            if (!newspaper) {
                throw new HttpError(httpStatus.NOT_FOUND, 'Newspaper not found');
            }

            const deletednewspaper = await newspaperService.deleteNewspaperById(request.params.newspaperId);
            response.send(deletednewspaper);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = newspaperController;