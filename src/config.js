'use strict';

module.exports = {
	CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
	PORT: process.env.PORT,
	DB_HOST: process.env.DB_HOST,
	DB_NAME: process.env.DB_NAME,
	DB_PORT: process.env.DB_PORT,
	NODE_ENV: process.env.NODE_ENV,
	IS_LOCAL_MONGO: process.env.IS_LOCAL_MONGO === 'true'
};