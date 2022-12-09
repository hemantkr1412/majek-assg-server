import express from "express";

import { sipcalculator } from "../controller/sip-controller.js";
const sipRouter = express.Router();

sipRouter.post("/sipcalculator", sipcalculator);

export default sipRouter;