const crypto = require('crypto')
const config = require("../config/index")
const axios = require('axios');

exports.generateHashedPassword = async (password) => {
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
    return hashedPassword
}

exports.generateAccessToken = async (refresh_token) => {

    // const client_id = '414232596434-f3m5ir52po6o6tcf2n8f31eeli11jqfc.apps.googleusercontent.com'
    // const client_secret = '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'

    const client_id = config.GOOGLE_CLIENT_ID
    const client_secret = config.GOOGLE_CLIENT_SECRET

    const params = new URLSearchParams();

    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('refresh_token', refresh_token);
    params.append('grant_type', 'refresh_token');

    const response = await axios.post(
        'https://oauth2.googleapis.com/token',
        params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );
    // The new access_token will be in response.data.access_token
    return response.data.access_token;
}


exports.decodeJWT = (token) => {
    if (!token) return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    // Base64url decode
    const payload = parts[1]
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    // Pad string to correct length for base64
    const padded = payload + '='.repeat((4 - payload.length % 4) % 4);
    try {
        return JSON.parse(atob(padded));
    } catch (e) {
        return null;
    }
}


exports.getUserObjectId = async (accessToken) => {
    const id = await this.decodeJWT(accessToken).id
    return id
}