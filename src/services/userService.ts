import { CreateUserDto, CreateUserResponseDto } from "@types/user";
import { Inject, Service } from "typedi";

@Service("userService")
export class UserService {
  public async createUser(
    createUserDto: CreateUserDto
  ): Promise<CreateUserResponseDto> {
    console.log("createUserDto", createUserDto);

    const response: CreateUserResponseDto = { name: createUserDto.name };

    return response;
  }
}
