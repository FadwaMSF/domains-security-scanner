const router = require("express-promise-router")();
const tlsController = require("../controllers/tlsController");

router.get("/tls", tlsController.tls);

module.exports = router;