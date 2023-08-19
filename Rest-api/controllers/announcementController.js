const { announcementModel, userModel } = require('../models');
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
            path: 'posts',
            populate: {
                path: 'userId'
            }
        })
        .then(announcement => res.json(announcement))
        .catch(next);
}

function createAnnouncement(req, res, next) {
    const { from, to, price, date, seats, description } = req.body;
    const { _id: userId } = req.user;
    announcementModel.create({ from, to, price, date, seats, description, userId, })
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
};

function editAnnouncement(req, res, next) {
    const id  = res.req.params['announcementId'];
    console.log(id);
    const { from, to, price, date, seats, description } = req.body;

    announcementModel.findByIdAndUpdate(id, { from, to, price, date, seats, description }, { runValidators: true, new: true })
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

async function deleteAnnouncement(req, res, next){

    const announcementId  = req.params['announcementId'];
    const { _id: userId } = req.user;

        const announcement = await announcementModel.findByIdAndDelete(announcementId);
        const user = await userModel.findOneAndUpdate({ _id: userId }, { $pull: { announcements: announcementId } })
        return;
    
}

module.exports = {
    getAnnouncements,
    createAnnouncement,
    getAnnouncement,
    subscribe,
    editAnnouncement,
    deleteAnnouncement
}
