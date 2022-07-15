import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.post("/webbook", homeController.postWebhook);
  router.get("/webbook", homeController.getWebhook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
