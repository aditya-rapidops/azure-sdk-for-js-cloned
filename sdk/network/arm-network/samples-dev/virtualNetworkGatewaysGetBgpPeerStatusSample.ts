/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 *
 * @summary The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/VirtualNetworkGatewayGetBGPPeerStatus.json
 */
async function getVirtualNetworkGatewayBgpPeerStatus() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGetBgpPeerStatusAndWait(
    resourceGroupName,
    virtualNetworkGatewayName
  );
  console.log(result);
}

async function main() {
  getVirtualNetworkGatewayBgpPeerStatus();
}

main().catch(console.error);
