import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // set up get started button, whitelisted domain
  router.post("/setup-profile", homeController.setupProfile);

  // set up persistent menu
  router.post("/setup-persistent-menu", homeController.setupPersistentMenu);

  router.post("/webhook", homeController.postWebhook);
  router.get("/webhook", homeController.getWebhook);

  router.get("/reserve-a-table", homeController.handleReserveATable);
  router.post("/reserve-a-table-ajax", homeController.handlePostReserveATable);

  return app.use("/", router);
};

module.exports = initWebRoutes;
