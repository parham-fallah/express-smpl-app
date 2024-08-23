const POSTGRES_CREDENTIALS = {
  // host: process.env['PGHOST'],
  // database: process.env['PGDATABASE'],
  // user: process.env['PGUSER'],
  // password: process.env['PGPASSWORD'],
  // port: +process.env['PGPORT'],
  // ssl: !!+process.env['PGSSL'],
  connectionString: process.env['PG_CONNECTION_STRING']
};

const JWT_SECRETS = {
  signKey: process.env['SIGN_KEY'],
};

export {
  POSTGRES_CREDENTIALS,
  JWT_SECRETS
};