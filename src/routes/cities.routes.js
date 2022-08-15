import { Router } from "express";
import { methods } from "../controllers/city.controller";

const router = Router();

router.get("/", methods.getCiudades);
router.get("/:id", methods.getCiudad);
router.post("/", methods.addCiudad);
router.delete("/:id", methods.deleteCiudad);
router.put("/:id", methods.updateCiudad);

export default router;