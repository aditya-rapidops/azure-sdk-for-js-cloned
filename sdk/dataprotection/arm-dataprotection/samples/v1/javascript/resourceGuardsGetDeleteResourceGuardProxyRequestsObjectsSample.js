/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataProtectionClient } = require("@azure/arm-dataprotection");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @summary Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-05-01/examples/ResourceGuardCRUD/ListDeleteResourceGuardProxyRequests.json
 */
async function listOperationsRequestObject() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] || "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName = process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const resourceGuardsName = "swaggerExample";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceGuards.listDeleteResourceGuardProxyRequestsObjects(
    resourceGroupName,
    resourceGuardsName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listOperationsRequestObject();
}

main().catch(console.error);
