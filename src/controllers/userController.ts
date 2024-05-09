import { APIGatewayProxyEvent } from "aws-lambda";
import { Service } from "typedi";

@Service("userController")
export class UserController {
  public getUser(event: APIGatewayProxyEvent): string {
    const body = JSON.parse(event.body);

    return "Hello World";
  }
}
