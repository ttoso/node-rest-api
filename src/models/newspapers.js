const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Publisher = require('../models/publishers');

//Model that defines the structure of a post and will create the instance to comunicate with DB
const NewspaperSchema = mongoose.Schema(
    {
        __id: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        creation_date: {
            type: Date
        },
        abstract: {
            type: String,
            required: true
        },
        languages: {
            type: Array,
            required: true
        },
        publisher: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' }],
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'creation_date',
            updatedAt: false
        }
    }
);

NewspaperSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Newspaper', NewspaperSchema);
