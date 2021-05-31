const router = require("express-promise-router")();
const domainController = require("../controllers/domain.controller");

router.get("/domains", domainController.allDomains);

module.exports = router;
