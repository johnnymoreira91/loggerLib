import winston from 'winston';
import { randomUUID } from 'crypto';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = () => {
  const env = process.env.NODE_ENV || process.env.APP_STAGE || 'dev';
  const isDevelopment = env === 'dev';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
};

winston.addColors(colors);

const createLogger = () => {
  const correlationId = randomUUID();

  const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message} (correlationId: ${info.correlationId || correlationId})`
    )
  );

  const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: 'logs/all.log' })
  ];

  return winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
    defaultMeta: { correlationId }
  });
};

// Criando uma instância de logger
const Logger = createLogger();

export default Logger;
