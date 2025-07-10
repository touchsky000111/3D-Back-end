require('dotenv').config();

module.exports = {
    PORT: 8080,
    testmode: false,
    DATABASE_URL: "mongodb+srv://landonflax1:a3NSnScjXqToD5Wi@cluster0.au0gl.mongodb.net/",
    // DATABASE_URL: 'mongodb://localhost:27017/',
    // STRIPE_SECRET_KEY: "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",
    STRIPE_SECRET_KEY: "sk_test_51RP4HbK1PgaMl6MQnx8OyU1IcTxL5Da4nHl17veIQC8hFqPJT73aZnBCX9lZSxXQkUotYFHrJJLaXE7WBtD04hTJ0041fMFMwr",

    ACCESS_TOKEN_EXPIRE_TIME: '1d',
    REFRESH_TOKEN_EXPIRE_TIME: '7d',

    ACCESS_TOKEN_SECRET: "goldhorse",
    REFRESH_TOKEN_SECRET: "whitehorse",

    OPENAI_API_KEY: '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',
    REDDIS_PASSWORD: process.env.REDDIS_PASSWORD,
    // FRONT_END_URL: "https://ai-agency-real-estate.vercel.app",

    FRONT_END_URL: "https://vsai.online",
    BACK_END_URL: "http://localhost:8080",

    CALENDLY_CLIENT_ID: "H_fnLI8WfVlENdRkEhHS5ypZLjz1WaNqod_5SWEfMUQ",
    CALENDLY_REDIRECT_URL: `/api/v1/oauth/calendly/callback`,
    CALENDLY_CLIENT_SECRET: "wiYDR8V3C0gav91Ylo2wEOQLuJYEjGa7M3exleuDmP8",

    token_uri: "https://oauth2.googleapis.com/token",
    scopes: [
        "https://mail.google.com/",
        "https://www.googleapis.com/auth/gmail.modify",
        "https://www.googleapis.com/auth/gmail.readonly"
    ],

    universe_domain: "googleapis.com",

    GOOGLE_CLIENT_ID: "805705206489-a8hvavthtl1vog993iv3f3repnppo4eh.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GOOGLE_REDIRECT_URL: "/dashboard/settings",

    VAPI_KEY: "ba68362d-ee0d-4cf9-8b7b-c0be1dcc1635",

    EMAILJS_SERVICE_ID: "service_m8srfyi",
    EMAILJS_TEMPLATE_ID: "template_35dv5yh",
    EMAILJS_USER_ID: "9g4dPFB-Qg4m9uT53",
    EMAILJS_ACCESS_TOKEN: "n7f8k0reGQb6UaV-mPamT",

    TWILIO_ACCOUNT_SID: "AC92795672cf11d0dccb7ceab60e4a49a8",  // premium twilio
    TWILIO_AUTH_TOKEN: "495cd1dfec18dc9d9691674bc28382d1",   // premium twilio
    TWILIO_CALLBACK_URL: "https://fish-related-giraffe.ngrok-free.app/api/v1",
    // TWILIO_ACCOUNT_SID: "AC6d950f0c26a04f6f0f79506d252f79f4",  // trial twilio
    // TWILIO_AUTH_TOKEN: "583ade3ccd914c9890de1523ed496ce0"   // trial twilio
}