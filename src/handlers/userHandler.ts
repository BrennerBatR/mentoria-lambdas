import { APIGatewayProxyEvent } from "aws-lambda";
import { UserController } from "src/controllers/userController";
import Container from "typedi";

const controller = Container.get<UserController>("userController");

export const getUserHttpHandler: APIGatewayProxyEvent =
  controller.getUser.bind(controller);
