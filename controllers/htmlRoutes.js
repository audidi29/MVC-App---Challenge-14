const router = require ("express").Router()

router.get('/api', apiRoutes);
router.use('home');

module.exports = router;