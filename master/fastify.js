module.exports = async () => {
    const fastify = require("fastify")();
    const routers = require("./routers");
    const chalk = require('chalk');
    const config = require("../config/index")

    // const fastifyMultipart = require('@fastify/multipart');

    // fastify.register(fastifyMultipart);

    fastify.register(require('@fastify/formbody')); // Needed for URL-encoded forms
    fastify.register(require('./mongoose'))
    // Register JWT plugin
    fastify.register(require('@fastify/jwt'), {
        secret: config.ACCESS_TOKEN_SECRET || 'your-secret-key'
    });

    // Register auth middleware
    fastify.register(require('../middleware/auth.middleware'));


    // Register CORS with specific configuration
    fastify.register(require('@fastify/cors'), {
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        maxAge: 86400 // 24 hours
    });

    fastify.addHook('onResponse', (request, reply, done) => {
        const now = new Date();
        const isoString = now.toISOString();
        console.log(
            `${chalk.gray("[")}${chalk.green(isoString)} ${chalk.green("INFO")}${chalk.gray("]")} ${request.ip} ${request.method} ${request.url} HTTP/${request.raw.httpVersion} ${reply.getHeader('content-length') || 0} - ${reply.statusCode == 200 ? chalk.green(reply.statusCode) : chalk.red(reply.statusCode)} ${request.headers['user-agent']} ${chalk.cyan(reply.elapsedTime.toFixed(2))} ${chalk.green("ms")}`
        );
        done();
    })

    // Define which routers need authentication
    const protectedRouters = ['users', 'profile']; // Add your protected router names here

    routers.map(router => {
        const opts = { prefix: `/api/v1/${router}` };
        fastify.register(require(`../routers/${router}.js`), opts);
    });

    return fastify
}