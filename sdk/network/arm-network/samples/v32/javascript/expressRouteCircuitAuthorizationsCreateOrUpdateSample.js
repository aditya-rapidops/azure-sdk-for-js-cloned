/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an authorization in the specified express route circuit.
 *
 * @summary Creates or updates an authorization in the specified express route circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-04-01/examples/ExpressRouteCircuitAuthorizationCreate.json
 */
async function createExpressRouteCircuitAuthorization() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const circuitName = "circuitName";
  const authorizationName = "authorizatinName";
  const authorizationParameters = {};
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCircuitAuthorizations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    circuitName,
    authorizationName,
    authorizationParameters
  );
  console.log(result);
}

async function main() {
  createExpressRouteCircuitAuthorization();
}

main().catch(console.error);
