import app from "./app.js";
import { Logger } from "./utils/logger.js";

/**
 * Set port value
 */
const port = process.env.PORT || 3000;

 /**
  * Init the server
  */
app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});
