'use strict';

module.exports = {
	CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://localhost:3000',
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://testuser:<testpassword>@cluster0.h21ys.mongodb.net/local_library?retryWrites=true&w=majority',
};