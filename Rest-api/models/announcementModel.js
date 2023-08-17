const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const announcementSchema = new mongoose.Schema({
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    seats: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    // posts: [{
    //     type: ObjectId,
    //     ref: "Post"
    // }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Announcement', announcementSchema);
