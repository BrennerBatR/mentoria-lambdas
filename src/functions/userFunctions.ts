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

const createUser = {
  handler: "src/handlers/userHandler.createUserHttpHandler",
  timeout: 30,
  memorySize: 128,
  events: [
    {
      http: {
        method: "post",
        path: "users",
      },
    },
  ],
};

export { getUser, createUser };
