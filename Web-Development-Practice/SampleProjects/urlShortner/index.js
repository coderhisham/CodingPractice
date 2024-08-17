const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const { connectDB } = require("./db/connect");
const port = 8001;
const URL = require("./models/url");

connectDB("mongodb://localhost:27017/urlShortner")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!entry) {
    return res.status(404).json({ error: "Url not found" });
  }
  return res.redirect(entry.redirectUrl);
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
