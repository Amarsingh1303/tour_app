const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const placesControllers = require("../controllers/places-controllers");

router.get("/:pid", placesControllers.getPlaceById);

router.get("/users/:uid", placesControllers.getPlacesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.delete("/:pid", placesControllers.deleteplace);

module.exports = router;
