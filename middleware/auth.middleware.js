const fp = require('fastify-plugin')

async function authMiddleware(fastify, opts) {
    // Basic authentication middleware
    fastify.decorate('authenticate', async (request, reply) => {
        try {
            await request.jwtVerify();
            console.log("middle ware => ", request.body);
            // No need to store isAuth since jwtVerify() throws if invalid
        } catch (err) {
            reply.code(401).send({ error: 'Unauthorized' });
        }
    });

    // Role-based authentication middleware
    fastify.decorate('authenticateWithRole', (roles) => {
        return async (request, reply) => {
            try {
                await request.jwtVerify();
                const userRole = request.user.role;

                console.log("Roles =>>> ", roles)

                console.log("userRole =>>> ", userRole)
                if (!roles.includes(userRole)) {
                    reply.code(403).send({ error: 'Forbidden: Insufficient permissions' });
                    return;
                }
            } catch (err) {
                reply.code(401).send({ error: 'Unauthorized' });
            }
        };
    });

    // Optional authentication middleware (doesn't throw error if no token)
    fastify.decorate('optionalAuth', async (request, reply) => {
        try {
            await request.jwtVerify();
        } catch (err) {
            // Don't throw error, just continue
            request.user = null;
        }
    });
}

module.exports = fp(authMiddleware, {
    name: 'auth-middleware'
});