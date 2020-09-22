module.exports = {
  DB_NAME: process.env.DB_NAME || 'auto_shop',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASS || '022894',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'ASDF32RKJ23BFKJQRFTBJ3F2',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'FDJKWRR23JDFGDS9GS9DGS99',

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'carshop@gmail.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASS || '12345678',

  FRONTEND_URL: process.env.FRONTEND_URL || 'https://ssadfasfasf.com.ua/'
}
