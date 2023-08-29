import { createLogger, format, transports, addColors } from 'winston';
const { combine, colorize, timestamp, errors, printf } = format;

const colors = {
  error: 'white bold redBG',
  warn: 'white bold yellowBG',
  info: 'white bold greenBG',
  http: 'white bold magentaBG',
  debug: 'black bold whiteBG',
};

addColors(colors);

const logger = createLogger({
  level:
    process.env.NODE_ENV === 'dev' || !process.env.NODE_ENV ? 'debug' : 'info',
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  format: combine(
    colorize({
      level: !['production', 'staging'].includes(process.env.NODE_ENV),
    }),
    timestamp(),
    errors({ stack: true }),
    printf((info) => {
      const { timestamp, level, message, stack } = info;
      return `${timestamp} ${level}: ${message} ${stack ? '\n' + stack : ''}`;
    }),
  ),
  transports: [
    new transports.Console({
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
});

export { logger };
