const getUser = {
  handler: "src/handlers/userHandler.getUserHttpHandler",
  timeout: 30,
  memorySize: 128,
  events: [
    {
      http: {
        method: "get",
        path: "users",
      },
    },
  ],
};

export { getUser };
