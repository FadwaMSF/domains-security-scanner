import { Router } from "express";

const router = Router();

//defining a test route
router.get("/test", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "You have reached our neweley developed app",
  });
});

module.exports = router;
