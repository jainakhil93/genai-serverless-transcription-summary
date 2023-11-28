#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PragmaticStepfuncStack } from '../lib/pragmatic-stepfunc-stack';
import { SharedResourcesStack } from '../lib/shared-resources'

const app = new cdk.App();
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT, 
  region: process.env.CDK_DEFAULT_REGION, 
};

const sharedResourcesStack = new SharedResourcesStack(app, 'SharedResourcesStack', {
  env: env
});


const pragmaticStepfuncStack = new PragmaticStepfuncStack(app, "TranscriptBedrockServerlesWorkflowStack", {
  env: env
});

pragmaticStepfuncStack.addDependency(sharedResourcesStack);