import { AWS } from '@serverless/typescript';
import * as httpFunctions from './src/functions/index';

async function getConfig(env: string): Promise<any> {
  console.log('🚀 ~ getConfig ~ env:', env);
  switch (env) {
    case 'dev':
      return import('config/dev');

    case 'prod':
      return import('config/prod');

    default:
      return import('config/dev');
  }
}

async function getServerlessConfig(): Promise<AWS> {
  const globalConfigs = await getConfig(process.env.NODE_ENV);

  const aws: AWS = {
    service: 'lambdas-mentoria',
    frameworkVersion: '3',
    plugins: ['serverless-webpack', 'serverless-offline'],
    provider: {
      name: 'aws',
      runtime: 'nodejs18.x',
      region: 'us-east-1',
      memorySize: 128,
      environment: {
        ...globalConfigs.environment,
      },
    },
    functions: { ...httpFunctions },
    package: { individually: false },
    custom: {
      stage: "${env:SLS_STAGE, opt:stage, self:provider.stage, 'local'}",
      webpack: {
        webpackConfig: './webpack.config.js',
        includeModules: {
          packagePath: './package.json',
        },
      },
    },
  };

  return aws;
}

module.exports = getServerlessConfig();
