import winston from "winston";

/**
 * Set levels of log
 */
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};


/**
 * Set a logger level
 * 
 * @memberof Logger
 * @method level
 * @returns {boolean}
 */
const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};


/**
 * Config colors of logger print
 */
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

/**
 * Set colors
 */
winston.addColors(colors);

/**
 * Format logger
 */
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({ filename: "logs/all.log" }),
];

/**
 * Create a logger instance
 */
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export { Logger };
