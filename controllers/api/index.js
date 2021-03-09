const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./projectRoutes.js');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;