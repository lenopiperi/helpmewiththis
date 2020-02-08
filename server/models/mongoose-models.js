const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
    	// __v: { type: Number, required: false },
    	// _id: { type: String, required: true },
    	body: { type: String, required: true },
    	displayName: { type: String, required: true },
        title: { type: String, required: true },
        // createdAt: {  type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks',Task)