import { Router } from "express";
import { methods } from "../controllers/users.controller";

const router = Router();

router.get("/", methods.getUsers);

export default router;