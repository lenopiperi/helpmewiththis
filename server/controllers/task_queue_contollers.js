const Task = require('../models/mongoose-models')

//api for adding a task to the database
addTask = (req,res) => {

    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a task',
        })
    }

    const task = new Task(body)

    if (!task) {
        return res.status(400).json({ success: false, error: err })
    }

    task
        .save()
        .then(() => {
        	console.log(task)
            return res.status(201).json({
                success: true,
                id: task._id,
                message: 'Task created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Task not created!',
            })
        })

}

//api to get tasks 
getTasks = async (req, res) => {
    await Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tasks not found` })
        }
        return res.status(200).json({ success: true, data: tasks })
    }).catch(err => console.log(err))
}

// //api for deleting a task from the database
// removeTask = (req,res) => {
// 	//
// }

// //api for updating a task in the database
// modifyTask = (req,res) => {
// 	//
// }

module.exports = {
    addTask,
    getTasks
}