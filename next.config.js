/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URL: "mongodb://lockheart:RAZz8rsNILo88Smq@ac-5djtpn4-shard-00-00.qs9wtoh.mongodb.net:27017,ac-5djtpn4-shard-00-01.qs9wtoh.mongodb.net:27017,ac-5djtpn4-shard-00-02.qs9wtoh.mongodb.net:27017/myvideo?ssl=true&replicaSet=atlas-d75adp-shard-0&authSource=admin&retryWrites=true&w=majority",
    }
}

module.exports = nextConfig
