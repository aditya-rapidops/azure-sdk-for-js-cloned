/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { DeploymentStacksClient } from "../src/deploymentStacksClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("DeploymentStacks test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: DeploymentStacksClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new DeploymentStacksClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("deploymentStacks create test", async function () {
    const res = await client.deploymentStacks.beginCreateOrUpdateAtResourceGroupAndWait(
      resourceGroup,
    	resourcename,
	    {
        actionOnUnmanage: {
          resources: "delete"
        },
        denySettings: {
          applyToChildScopes: false,
          excludedActions: ["action"],
          excludedPrincipals: ["principal"],
          mode: "denyDelete"
        },
        template:{
        "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
        "contentVersion": "1.0.0.0",
        "parameters": {
          "foo": {
            "type": "string",
            "defaultValue": "foo",
            "metadata": {
              "description": "description"
            }
          },
          "bar": {
            "type": "string",
            "defaultValue": "bar",
            "metadata": {
              "description": "description"
            }
          }
        },
        "functions": [],
        "variables": {

        },
        "resources": [],
        "outputs": {
          "foo": {
            "type": "string",
            "value": "[parameters('foo')]"
          },
          "bar": {
            "type": "string",
            "value": "[parameters('bar')]"
          }
        }
      },
        tags: { tagkey: "tagVal" }
      },
     testPollingOptions);
    assert.equal(res.name, resourcename);
  });

  it("deploymentStacks get test", async function () {
      const res = await client.deploymentStacks.getAtResourceGroup(resourceGroup,
    	resourcename);
      assert.equal(res.name, resourcename);
  });

  it("deploymentStacks list test", async function () {
    const resArray = new Array();
    for await (let item of client.deploymentStacks.listAtResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("deploymentStacks delete test", async function () {
    const resArray = new Array();
    const res = await client.deploymentStacks.beginDeleteAtResourceGroupAndWait(resourceGroup, resourcename
)
    for await (let item of client.deploymentStacks.listAtResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
