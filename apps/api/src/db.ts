/* eslint-disable turbo/no-undeclared-env-vars */
import mongoose from 'mongoose';
import { logger } from './utils/logger';



function dbConnection() {
  // console.log('config', config);

  // const { auth, options, ...db }: any = config.db;
  // const dbAuth = `${auth.user}:${auth.password}@`;
  // const optionalPort = db.port ? `:${db.port}` : '';
  // const uri = `${db.prefix}${dbAuth}${db.hostname}${optionalPort}/${db.dbName}`;

  const uri = process.env.MONGO_URI;

  mongoose.connection.on('connected', () => {
    logger.info(`@Moula-Manager * connected to / LA GROSSE MOULA database`);
  });
  return mongoose.connect(uri);
}

export { dbConnection };
