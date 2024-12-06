import { Router } from "express";
const router = Router();

router.get("/:report", (_req, res) => {
    res.send(`Report: ${_req.params.report}`);
});

export default router;
