/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnection,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Approve or reject a private endpoint connection under disk access resource, this can't be used to create a new private endpoint connection.
 *
 * @summary Approve or reject a private endpoint connection under disk access resource, this can't be used to create a new private endpoint connection.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-01-02/examples/diskAccessExamples/DiskAccessPrivateEndpointConnection_Approve.json
 */
async function approveAPrivateEndpointConnectionUnderADiskAccessResource() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const privateEndpointConnectionName = "myPrivateEndpointConnection";
  const privateEndpointConnection: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Approving myPrivateEndpointConnection",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskAccesses.beginUpdateAPrivateEndpointConnectionAndWait(
    resourceGroupName,
    diskAccessName,
    privateEndpointConnectionName,
    privateEndpointConnection
  );
  console.log(result);
}

async function main() {
  approveAPrivateEndpointConnectionUnderADiskAccessResource();
}

main().catch(console.error);
