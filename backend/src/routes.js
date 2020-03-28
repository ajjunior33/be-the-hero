const { Router } = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngsController = require("./controllers/OngsController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const routes = Router();
routes.post(
  "/session",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

routes.get("/ongs", OngsController.list);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .length(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngsController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.list
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      pages: Joi.number()
    })
  }),
  IncidentController.list
);
routes.post(
  "/incidents",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.required()
    })
  }),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);
module.exports = routes;
