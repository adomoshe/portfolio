const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use("/apple-app-site-association", (req, res) => {
  res.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "SVB475XH7W.com.moshe-studios.queue",
          paths: ["*"],
        },
      ],
    },
  });
});

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
