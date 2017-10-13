const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebcubicSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    }, 

    occupation: {
        type: String
    },


    available: {
        type: Boolean,
        default: false
    }
});

const Webcubic = mongoose.model('webcubic', WebcubicSchema);

module.exports = Webcubic;