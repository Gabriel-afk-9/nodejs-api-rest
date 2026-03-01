'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type:Boolean,
        require: true,
        default: true
    },
    tags: [{
        type: String,
        require: true
    }]
});

// {
//     "title":"titulo",
//     "description":"teste",
//     "tags": [
//         "teste", "123", "pessoas"
//     ]
// }

module.exports = mongoose.model('Product', schema);