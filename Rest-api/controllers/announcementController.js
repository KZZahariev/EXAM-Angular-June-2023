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
    console.log(announcementId);
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
};

async function edit(req, res, next) {

    try {
        const announcement = await animalManager.getOne(req.params.animalId);
        const announcementId = req.params.announcementId;
        let res = await announcementModel.findById(announcementId).lean();


        const user = req.user?.email.toString()

        if (!(animal.owner?.toString() == req.user?._id)) {
            return res.redirect('/404');
        };

        res.render(`animals/edit`, { ...animal, user });
    } catch (error) {
        return res.status(400).render('404', { error: getErrorMessage(error) })
    }

};

function editAnnouncement(req, res, next) {
    const { _id: userId } = req.user;
    const { from, to, price, date, seats, description } = req.body;

    announcementModel.findOneAndUpdate({ _id: userId }, { from, to, price, date, seats, description }, { runValidators: true, new: true })
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

module.exports = {
    getAnnouncements,
    createAnnouncement,
    getAnnouncement,
    subscribe,
    edit,
    editAnnouncement
}
