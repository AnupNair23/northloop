import axios from "axios"
import { config } from "../config";
import redisClient from "../helper/redis";

const getNews = async (req, res) => {
    const options = {
        method: 'GET',
        url: `${config.rapid_api_base_url}/news/v2/get-details`,
        params: { uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd', region: 'US' },
        headers: {
            'x-rapidapi-key': config.rapid_api_key,
            'x-rapidapi-host': config.rapid_api_host
        }
    };

    axios.request(options).then(function (response) {
        redisClient.setex('getnews', 3600, JSON.stringify(response.data));
        res.status(200).send(response.data)
    }).catch(function (error) {
        res.status(200).send(error)

    });
}

export { getNews }