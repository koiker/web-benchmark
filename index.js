'use strict';

import Fastify from 'fastify';
import process from 'node:process';

const fastify = Fastify();
const {
    randomBytes
} = await import('node:crypto');
const file1G = randomBytes(1024 * 1024 * 1024);
const file100M = randomBytes(1024 * 1024 * 100)

const schema = {
    schema: {
        response: {
            200: {
                type: 'object'
            }
        }
    }
}

fastify.get('/:fileSize', schema, function (req, reply) {
    const { fileSize } = req.params;
    if (fileSize === '1G'){
        console.debug('Returning 1G');
        reply
            .header('Content-Type', 'application/octet-stream')
            .type('application/octet-stream')
            .send(file1G);
    }else if (fileSize === '100M'){
        console.debug('Returning 100M');
        reply
            .header('Content-Type', 'application/octet-stream')
            .type('application/octet-stream')
            .send(file100M);
    }else {
        console.debug('Returning default');
        reply.send({ healthcheck: 'ok' });
    }

})

fastify.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    let port = fastify.server.address().port
    console.log(`Server listening: ${port}`)
})