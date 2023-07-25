/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 *
 * @summary To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2023-05-01/examples/PrivateEndpointConnectionsList.json
 */
async function listPrivateEndpointConnectionsByManagedCluster() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.list(
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

async function main() {
  listPrivateEndpointConnectionsByManagedCluster();
}

main().catch(console.error);
