import redisClient from "./redis"

const checkCache = async (req, res, next) => {
    // return function (req, res, next) {
        redisClient.get('analysis', (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            if (data != null) {
                res.send(JSON.parse(data))
            }
            else {
                next()
            }

        })
    // }

}

const checkNewsCache = async (req, res, next) => {
    // return function (req, res, next) {
        redisClient.get('getnews', (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            if (data != null) {
                res.send(JSON.parse(data))
            }
            else {
                next()
            }

        })
    // }

}

export { checkCache, checkNewsCache }