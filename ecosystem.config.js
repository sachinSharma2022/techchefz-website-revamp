module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/next/dist/bin/next",
      args: "start",

      env: {
        NODE_ENV: "development",
        PORT: 4562,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4562,
      },
    },
  ],
};
