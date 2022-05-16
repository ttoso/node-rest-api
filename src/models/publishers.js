const mongoose = require('mongoose');

//Model that defines the structure of a post and will create the instance to comunicate with DB
const PublisherSchema = mongoose.Schema(
    {
        __id: {
            type: String
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'joined_date',
            updatedAt: false
        }
    }
);

module.exports = mongoose.model('Publisher', PublisherSchema);