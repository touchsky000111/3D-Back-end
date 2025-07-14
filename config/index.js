require('dotenv').config();

module.exports = {
    PORT: 8080,
    DATABASE_URL: "mongodb+srv://landonflax1:a3NSnScjXqToD5Wi@cluster0.au0gl.mongodb.net/",
    ACCESS_TOKEN_EXPIRE_TIME: '1d',
    REFRESH_TOKEN_EXPIRE_TIME: '7d',
    ACCESS_TOKEN_SECRET: "goldhorse",
    REFRESH_TOKEN_SECRET: "whitehorse",
    DOMAIN: "https://main.mydesignerplus.com"
}