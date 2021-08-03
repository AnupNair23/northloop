import axios from "axios"
import { config } from "../config";
import redisClient from "../helper/redis";

const getAnalysis = async (req, res) => {
    const options = {
        method: 'GET',
        url: `${config.rapid_api_base_url}/auto-complete`,
        params: { q: 'tesla', region: 'US' },
        headers: {
            'x-rapidapi-key': config.rapid_api_key,
            'x-rapidapi-host': config.rapid_api_host
        }
    };

    axios.request(options).then(function (response) {
        redisClient.setex('analysis', 3600, JSON.stringify(response.data));
        res.status(200).send(response.data)

    }).catch(function (error) {
        res.status(200).send(error)

        // console.error(error);
    });
}

export { getAnalysis }