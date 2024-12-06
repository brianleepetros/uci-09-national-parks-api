import { Router } from "express";
const router = Router();

import reportRoutes from "./reportRoutes.js";

router.use('/reports', reportRoutes);

export default router;
