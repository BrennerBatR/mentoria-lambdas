import { APIGatewayProxyEvent } from "aws-lambda";
import Container from "typedi";
import { UserController } from "@controllers/userController";
import "../../dependencies";

const controller = Container.get<UserController>("userController");

export const getUserHttpHandler: APIGatewayProxyEvent =
  controller.getUser.bind(controller);

export const createUserHttpHandler: APIGatewayProxyEvent =
  controller.createUser.bind(controller);
