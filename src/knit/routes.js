const {Router} = require("express");
const controller = require("./controllers");
const router = Router();

router.get("/", controller.getKnits);
router.get("/:id", controller.getKnitById);
router.post("/", controller.addKnit);
router.delete("/:id", controller.deleteKnit);
router.put("/:id", controller.updateKnit);
module.exports= router;