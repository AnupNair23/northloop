import redis from "redis"
import { config } from "../config";

const redisClient = redis.createClient({
    host: config.redis_host,
    port: config.redis_port,
    password: config.redis_password
});

export default redisClient
