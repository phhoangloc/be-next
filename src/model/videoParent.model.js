const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoParentSchema = new Schema({
    name: String,
    video: String,
    end: Boolean,
    select: Boolean,
    returnMenu: Boolean,
    number: String,
    img: String,
    infor: String,
    pdf: String,
    children: [
        { type: Schema.Types.ObjectId, ref: "children" }
    ],
})

export const VideoParentModel = mongoose.models.video_parent || mongoose.model('video_parent', VideoParentSchema)