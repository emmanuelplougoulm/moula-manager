import mongoose from 'mongoose';
// import config from '../config/index';
import { logger } from './utils/logger';

function dbConnection() {
  // console.log('config', config);

  // const { auth, options, ...db }: any = config.db;
  // const dbAuth = `${auth.user}:${auth.password}@`;
  // const optionalPort = db.port ? `:${db.port}` : '';
  // const uri = `${db.prefix}${dbAuth}${db.hostname}${optionalPort}/${db.dbName}`;

  // uncomment when you want to deploy it

  // for now use this one as mongo allows connection without credentials
  // when it's local
  const uri = `mongodb+srv://zion_w:9VyrfYVJK4F1Fbj2@mm-db.nno9opr.mongodb.net/`;

  mongoose.connection.on('connected', () => {
    logger.info(`@Moula-Manager * connected to / LA GROSSE MOULA database`);
  });
  return mongoose.connect(uri);
}

export { dbConnection };
