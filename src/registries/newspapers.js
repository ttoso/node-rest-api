const Newspaper = require('../models/newspapers');


const newspapersRegistry = {

    getNewspapers: async (limit, offset) => {
        return await Newspaper.paginate(
            {},
            {populate: 'publisher', limit: limit, offset: offset},
            (err, result) => result.docs
        );
    },

    getNewspaperById: async (newspaperId) => {
        return await Newspaper.findById(newspaperId);
    },

    createNewspaper: async (newspaper) => {
        newNewspaper = new Newspaper(newspaper);

        return await newNewspaper.save();
    },

    updateNewspaper: async (newspaperId, newspaperToUpdate) => {
        return await Newspaper.findByIdAndUpdate(newspaperId, newspaperToUpdate);
    },

    deleteNewspaperById: async (newspaperId)  => {
        return await Newspaper.findByIdAndDelete(newspaperId);
    },
};

module.exports = newspapersRegistry;