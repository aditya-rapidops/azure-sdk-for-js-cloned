/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get auth token for a container app
 *
 * @summary Get auth token for a container app
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-11-01-preview/examples/ContainerApps_GetAuthToken.json
 */
async function getContainerAppAuthToken() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const containerAppName = "testcontainerApp0";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerApps.getAuthToken(resourceGroupName, containerAppName);
  console.log(result);
}

async function main() {
  getContainerAppAuthToken();
}

main().catch(console.error);
