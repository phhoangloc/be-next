const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoChildrenSchema = new Schema({
    name: String,
    video: String,
    end: Boolean,
    select: Boolean,
    returnMenu: Boolean,
})

export const videoChildrenModel = mongoose.models.children || mongoose.model('video_children', VideoChildrenSchema)