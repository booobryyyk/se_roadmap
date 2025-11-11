import { sendEmailHandler, closeTransporter } from '@/handler.js';
import { sendEmailSchema } from '@/schema.js';
import { config } from '@/config.js';
import fastify from 'fastify';

const server = fastify({
  logger: {
    level: config.server.nodeEnv === 'production' ? 'info' : 'debug',
  },
});

server.post('/send-email', { schema: sendEmailSchema }, sendEmailHandler);

const signals = ['SIGINT', 'SIGTERM'];
signals.forEach((signal) => {
  process.on(signal, async () => {
    server.log.info('Shutting down gracefully...');
    await server.close();
    closeTransporter();
    process.exit(0);
  });
});

try {
  await server.listen({ port: config.server.port, host: '0.0.0.0' });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
