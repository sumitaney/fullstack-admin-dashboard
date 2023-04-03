import  express  from "express";
import { getUser, geDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", geDashboardStats);


export default router;