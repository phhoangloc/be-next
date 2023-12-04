
import ConnectMongoDB from '../../connect/database/mongoseDB'
import { VideoParentModel } from '../../model/videoParent.model'
import { videoChildrenModel } from '../../model/videoChildren.model'
const createUser = async (
    req, res
) => {
    ConnectMongoDB()
    const body = {}
    VideoParentModel.findOne()
        .populate("children")
        .catch((error) => {
            body.success = false
            body.message = error.message
            res.json(body)
        })
        .then((data) => {
            body.success = true
            body.data = data
            res.json(body)

        })
}

export default createUser