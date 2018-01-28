const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survery = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin(), requireCredits(), (req, res) => {
    const { title, subject, body, recipients } = reg.body;

    const survey = new survey({
      title,
      subject,
      body,
      recipients
    });
  });
};
