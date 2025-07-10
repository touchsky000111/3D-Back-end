const config = require("../config/index")
const axios = require("axios")
const mongooseController = require("../controller/mongoose.controller")
const authController = require("../controller/auth.controller")

module.exports = async (fastify) => {
    fastify.get("/calendly/start", async (req, rep) => {

        const clientId = config.CALENDLY_CLIENT_ID;
        const redirectURL = config.BACK_END_URL + config.CALENDLY_REDIRECT_URL

        const redirectUri = encodeURIComponent(redirectURL);
        console.log("redirect url => ", redirectURL)

        console.log("calendly =>>> ", redirectUri)

        const authUrl = `https://auth.calendly.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
        console.log("Auth URl => ", authUrl)
        rep.redirect(authUrl);
    })

    fastify.get("/calendly/callback", async (req, rep) => {
        const { code } = req.query;
        console.log("code => ", code)

        const redirect_url = config.BACK_END_URL + config.CALENDLY_REDIRECT_URL

        try {
            const tokenRes = await axios.post(
                'https://auth.calendly.com/oauth/token',
                {
                    grant_type: 'authorization_code',
                    code,
                    client_id: config.CALENDLY_CLIENT_ID,
                    client_secret: config.CALENDLY_CLIENT_SECRET,
                    redirect_uri: redirect_url,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            const accessToken = tokenRes.data.access_token;

            console.log("access_Token => ", accessToken)
            // You can store access token in DB or session
            rep.redirect(`${config.FRONT_END_URL}/dashboard/settings?token=${accessToken}`);

        }
        catch (err) {
            console.log("Err => ", err)
        }
    })

    fastify.post("/save_calendly_apikey", async (req, rep) => {
        const { accessToken, id } = req.body
        const result = await mongooseController.saveCalendlyAccessToken(id, accessToken)
        console.log("result", result)
        return result
    })


}