// src/routes/AuthPermissionsRoutes.js
const express = require("express");
const router = express.Router();
const AuthPermissionsController = require("../controllers/AuthPermissionsController");
const validateRequest = require("../middlewares/validateRequest");

router.put(
  "/auth/permissions/:id",
  validateRequest,
  AuthPermissionsController.setPermissions
);

module.exports = router;
