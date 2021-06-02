const router = require("express-promise-router")();
const domainController = require("../controllers/domain.controller");

router.get("/all", domainController.allDomains);

module.exports = router;
