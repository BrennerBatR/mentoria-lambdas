import { AWS } from "@serverless/typescript";
import * as httpFunctions from "./src/functions/index";

async function getServerlessConfig(): Promise<AWS> {
  const aws: AWS = {
    service: "lambdas-mentoria",
    frameworkVersion: "3",
    plugins: ["serverless-webpack", "serverless-offline"],
    provider: {
      name: "aws",
      runtime: "nodejs18.x",
      region: "us-east-1",
      memorySize: 128,
    },
    functions: { ...httpFunctions },
    package: { individually: false },
    custom: {
      webpack: {
        webpackConfig: "./webpack.config.js",
        includeModules: {
          packagePath: "./package.json",
        },
      },
    },
  };

  return aws;
}

module.exports = getServerlessConfig();
