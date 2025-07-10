var fs = require("fs");
var routers;
try {
    routers = fs.readdirSync('routers');
} catch (error) {
    routers = [];
    // console.error('>> ERROR: getting route >> ', error.response?.data || error.message);
    console.error('>> ERROR: getting route >> ', error);
}

module.exports = routers.map(router => router.split(".")[0]);