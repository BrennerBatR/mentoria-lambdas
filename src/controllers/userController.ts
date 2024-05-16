import { UserService } from '@services/userService';
import { CreateUserDto } from '@types/user';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Inject, Service } from 'typedi';

@Service('userController')
export class UserController {
  constructor(
    @Inject('userService')
    private readonly userService: UserService,
  ) {}

  public async getUser(): Promise<APIGatewayProxyResult> {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World!',
      }),
    };
  }

  public async createUser(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    const body: CreateUserDto = JSON.parse(event.body);

    const result = await this.userService.createUser(body);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  }
}
