const { createClient } = require("redis");

const client = createClient({
  url: process.env.REDIS_URL
});

client.connect()
  .then(() => console.log("Redis connected"))
  .catch(console.error);

module.exports = client;