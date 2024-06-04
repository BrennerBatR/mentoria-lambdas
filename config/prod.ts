import { AwsLambdaEnvironment } from '@serverless/typescript';

export const environment: AwsLambdaEnvironment = {
  MENTORIA_TEST: '${ssm:/${self:custom.stage}/lambdas-mentoria/mentoria-test}',
};
