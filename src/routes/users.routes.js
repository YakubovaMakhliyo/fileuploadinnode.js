import { Router } from "express";
import { uploads } from "../utils/multer.config.js";
import {
  userCreat,
  userDelete,
  userGet,
  userUpdate,
} from "../controller/users.controller.js";


const router = Router();

router.get("/user/:id", userGet);
router.post("/user", uploads.single("avatarka"), userCreat);
router.delete("/user/:id", userDelete);
router.put("/user/:id",uploads.single("avatarka"), userUpdate);

export default router;
