declare namespace NodeJS {
  interface ProcessEnv {
      FRONTEND_URL: string;
      PRISMA_ENDPOINT: string;
      PRISMA_SECRET: string;
      APP_SECRET: string;
      STRIPE_SECRET: string;
      PORT: string;
      MAIL_HOST: string;
      MAIL_PORT: string;
      MAIL_USER: string;
      MAIL_PASSWORD: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.graphql' {
  const value: any;
  export default value;
}
