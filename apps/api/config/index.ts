export default {
  api: {
    hostname: '0.0.0.0',
    port: 8010,
  },
  db: {
    prefix: 'mongodb://',
    hostname: '0.0.0.0',
    dbName: 'admin',
    port: 27017,
    auth: {
      user: '',
      password: '',
    },
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
