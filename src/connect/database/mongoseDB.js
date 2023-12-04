import mongoose from "mongoose"

const ConnectMongoDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URL}`)
        .catch((error) => {
            throw error.message
        })
        .then(() => {
            console.log("connect mongodb success! ")
        })

}
export default ConnectMongoDB;