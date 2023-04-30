const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dataRoutes = require("./dataRoutes")

router.use('/users', userRoutes);
router.use("/data", dataRoutes);
router.use("/dashboard", dashboardRoutes)

module.exports = router;