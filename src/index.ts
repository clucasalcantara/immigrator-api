import Immigator from "./app";

const PORT = process.env.PORT || 3000;

Immigator.listen(PORT, () => {
  console.info(`🚀 Immigrator is running at http://localhost:${PORT}`);
});
