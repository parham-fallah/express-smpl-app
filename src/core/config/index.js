const EXPRESS_APP = {
  port: process.env['port'],
}

const BCRYPT_CONFIG = {
  rounds: +process.env['BCRYPT_ROUNDS'],
};

export {
  EXPRESS_APP,
  BCRYPT_CONFIG
};