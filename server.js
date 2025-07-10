const config = require("./config");
const fastify = require("./master/fastify")
const chalk = require('chalk');

const start = async () => {
    try {
        const app = await fastify()
        await app.listen({ port: config.PORT, host:'0.0.0.0' });
        console.log(chalk.green('✔') + chalk.white(` Server listening on http://localhost:${config.PORT}`));
    } catch (error) {
        // console.error('>> ERROR: server >> ', error.response?.data || error.message);
        console.error('>> ERROR: server >> ', error);
        process.exit(1);
    }
};

start();