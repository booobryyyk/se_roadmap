import dotenv from 'dotenv';

dotenv.config();

interface Config {
  email: {
    user: string;
    password: string;
    fromName: string;
    fromAddress: string;
  };
  server: {
    port: number;
    nodeEnv: string;
  };
}

function validateConfig(): Config {
  const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD', 'EMAIL_FROM_NAME', 'EMAIL_FROM_ADDRESS'];
  
  const missing = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return {
    email: {
      user: process.env.EMAIL_USER!,
      password: process.env.EMAIL_PASSWORD!,
      fromName: process.env.EMAIL_FROM_NAME!,
      fromAddress: process.env.EMAIL_FROM_ADDRESS!,
    },
    server: {
      port: parseInt(process.env.PORT || '8080', 10),
      nodeEnv: process.env.NODE_ENV || 'development',
    },
  };
}

export const config = validateConfig();
