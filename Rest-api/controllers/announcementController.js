const { announcementModel } = require('../models');
const { newPost } = require('./postController')

function getAnnouncements(req, res, next) {
    announcementModel.find()
        .populate('userId')
        .then(announcements => res.json(announcements))
        .catch(next);
}

function getAnnouncement(req, res, next) {
    const { announcementId } = req.params;

    announcementModel.findById(announcementId)
        .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })
        .then(announcement => res.json(announcement))
        .catch(next);
}

function createAnnouncement(req, res, next) {
    const { from, to, price, date, seats, description } = req.body;
    const { _id: userId } = req.user;

    announcementModel.create({ from, to, price, date, seats, description, userId, subscribers: [userId] })
        .then(announcement => {
            newPost(description, userId, announcement._id)
                .then(([_, updatedAnnouncement]) => res.status(200).json(updatedAnnouncement))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const announcementId = req.params.announcementId;
    const { _id: userId } = req.user;
    announcementModel.findByIdAndUpdate({ _id: announcementId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedAnnouncement => {
            res.status(200).json(updatedAnnouncement)
        })
        .catch(next);
}

module.exports = {
    getAnnouncements,
    createAnnouncement,
    getAnnouncement,
    subscribe,
}
