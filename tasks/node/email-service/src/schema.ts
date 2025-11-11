import type { FastifySchema } from "fastify";

export const sendEmailSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['destination', 'subject', 'body'],
    properties: {
      destination: { 
        type: 'string',
        format: 'email',
        minLength: 5,
        maxLength: 254,
      },
      subject: { 
        type: 'string',
        minLength: 1,
        maxLength: 200,
      },
      body: { 
        type: 'string',
        minLength: 1,
        maxLength: 10000,
      },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
};

export interface SendEmailBody {
  destination: string;
  subject: string;
  body: string;
}
