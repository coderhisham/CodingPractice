const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({
      error: "Url is required",
    });
  const shortID = shortid.generate();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });
  res.json({
    shortid: shortID,
  });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  console.log(result);
  if (!result) {
    return res.status(404).json({
      error: "Url not found",
    });
  }
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { generateNewShortUrl, getAnalytics };
