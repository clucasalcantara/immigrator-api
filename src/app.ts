import express from "express";
// Routing
import routes from "./routes";

const immigrator = express();

immigrator.use(express.json());
immigrator.use(routes);

export default immigrator;
