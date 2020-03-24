const { Router } = require("express");
const OngsController = require("./controllers/OngsController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const routes = Router();
routes.post("/session", SessionController.create);

routes.get("/ongs", OngsController.list);
routes.post("/ongs", OngsController.create);

routes.get("/incidents", IncidentController.list);
routes.get("/profile", ProfileController.list);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);
module.exports = routes;
