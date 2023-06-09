const redis = require("redis");
const logger = require("../log/logger");

const redisClient = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});

redisClient.on("connect", () => {
  logger.info("Redis client connected");
});

redisClient.on("error", (err) => {
  console.log("Something went wrong " + err);
});

module.exports = redisClient;