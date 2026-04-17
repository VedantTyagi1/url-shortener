const URL = require("../models/urlModel");
const { encode } = require("../utils/base62");
const redisClient = require("../config/redis");

let counter = 100000; // simple counter for demo

// Create short URL
exports.createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  try {
    const shortId = encode(counter++);
    
    const newUrl = await URL.create({
      originalUrl,
      shortId
    });

    res.json({
      shortUrl: `${process.env.BASE_URL}/${shortId}`
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Redirect
exports.redirectUrl = async (req, res) => {
  const { shortId } = req.params;

  try {
    // 🔥 Check Redis first
    const cachedUrl = await redisClient.get(shortId);

    if (cachedUrl) {
      return res.redirect(cachedUrl);
    }

    const url = await URL.findOne({ shortId });

    if (!url) return res.status(404).send("Not found");

    // Cache it
    await redisClient.set(shortId, url.originalUrl, {
      EX: 3600
    });

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};