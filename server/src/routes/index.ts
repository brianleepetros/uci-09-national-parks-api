import { Router } from "express";
const router = Router();

import apiRoutes from "./api/index.js";
import htmlRoutes from "./htmlRoutes.js";
import docRoutes from "./docs/index.js";

router.use("/docs", docRoutes);
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

export default router;
