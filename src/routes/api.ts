import { Router } from "express";
import * as ApiController from "../controllers/apiController";
export const router = Router();

router.post("/register", ApiController.registerUser);
router.post("/login", ApiController.userLogin);
router.get("/users", ApiController.getUsers);
router.put("/:id", ApiController.updateUser);
router.delete("/:id", ApiController.deleteUser);
router.post("/event/", ApiController.postEvent as any);
router.get("/event/", ApiController.getEvents as any);
router.get("/event/:id", ApiController.getEvent as any);
router.put("/event/:id", ApiController.updateEvent as any);
router.delete("/event/:id", ApiController.deleteEvent as any);
