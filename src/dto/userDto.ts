export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponseDto {
  name: string;
}
