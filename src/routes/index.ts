import { Router } from "express";
// Services
import { getVisaRequirements } from "../services";
const routes = Router();

routes.post("/visa-by-country", async (req, res) => {
  const data = await getVisaRequirements(req.body.country);

  return res.json({ ...data });
});

export default routes;
