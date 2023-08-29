import mongoose from 'mongoose';
import config from 'config';

import { logger } from './utils/logger';

function dbConnection() {
  const { auth, options, ...db }: any = config.get('db');
  const dbAuth = `${auth.user}:${auth.password}@`;
  const optionalPort = db.port ? `:${db.port}` : '';
  const uri = `${db.prefix}${dbAuth}${db.hostname}${optionalPort}/${db.dbName}`;

  mongoose.connection.on('connected', () => {
    logger.info(`@Moula-Manager * connected to / ${db.dbName} database`);
  });
  return mongoose.connect(uri, options);
}

export { dbConnection };
