const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { announcementController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', announcementController.getAnnouncement);
router.post('/', auth(), announcementController.createAnnouncement);

router.get('/:announcementId', announcementController.getAnnouncement);
router.post('/:announcementId', auth(), postController.createPost);
router.put('/:announcementId', auth(), announcementController.subscribe);
router.put('/:announcementId/posts/:postId', auth(), postController.editPost);
router.delete('/:announcementId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), announcementController.getReservations);

module.exports = router