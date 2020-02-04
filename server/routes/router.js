const express = require('express')

const TaskCtrl = require('../controllers/task_queue_contollers')

const router = express.Router()

router.post('/task', TaskCtrl.addTask)
router.get('/task', TaskCtrl.getTasks)

module.exports = router