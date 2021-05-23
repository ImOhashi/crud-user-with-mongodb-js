import app from "./app.js";
import { Logger } from "./utils/logger.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});
