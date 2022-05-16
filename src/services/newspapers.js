const newspapersRegistry = require('../registries/newspapers');
const Newspaper = require('../models/newspapers');

const newspapersService = {

    getNewspapers: async (limit, offset) => {
        return await newspapersRegistry.getNewspapers(limit, offset);
    },

    getNewspaperById: async (newspaperId)  => {
        return await newspapersRegistry.getNewspaperById(newspaperId);
    },

    createNewspaper: async (newspaperToCreate)  => {
        return await newspapersRegistry.createNewspaper(newspaperToCreate);
    },

    updateNewspaper: async (newspaperId, newspaperToUpdate)  => {
        return await newspapersRegistry.updateNewspaper(newspaperId, newspaperToUpdate);
    },

    deleteNewspaperById: async (newspaperId)  => {
        return await newspapersRegistry.deleteNewspaperById(newspaperId);
    },
};

module.exports = newspapersService;