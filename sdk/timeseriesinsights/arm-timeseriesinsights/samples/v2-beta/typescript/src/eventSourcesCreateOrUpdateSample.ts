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
  EventHubEventSourceCreateOrUpdateParameters,
  TimeSeriesInsightsClient
} from "@azure/arm-timeseriesinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update an event source under the specified environment.
 *
 * @summary Create or update an event source under the specified environment.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/EventSourcesCreateEventHub.json
 */
async function createEventHubEventSource() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const environmentName = "env1";
  const eventSourceName = "es1";
  const parameters: EventHubEventSourceCreateOrUpdateParameters = {
    type: "EarliestAvailable",
    consumerGroupName: "cgn",
    eventHubName: "ehn",
    eventSourceResourceId: "somePathInArm",
    keyName: "managementKey",
    kind: "Microsoft.EventHub",
    localTimestampPropertiesLocalTimestamp: {
      format: "TimeSpan",
      timeZoneOffset: { propertyName: "someEventPropertyName" }
    },
    location: "West US",
    serviceBusNamespace: "sbn",
    sharedAccessKey: "someSecretvalue",
    timestampPropertyName: "someTimestampProperty"
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.eventSources.createOrUpdate(
    resourceGroupName,
    environmentName,
    eventSourceName,
    parameters
  );
  console.log(result);
}

createEventHubEventSource().catch(console.error);

/**
 * This sample demonstrates how to Create or update an event source under the specified environment.
 *
 * @summary Create or update an event source under the specified environment.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/EventSourcesCreateEventHubWithCustomEnquedTime.json
 */
async function eventSourcesCreateEventHubWithCustomEnquedTime() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const environmentName = "env1";
  const eventSourceName = "es1";
  const parameters: EventHubEventSourceCreateOrUpdateParameters = {
    type: "CustomEnqueuedTime",
    consumerGroupName: "cgn",
    eventHubName: "ehn",
    eventSourceResourceId: "somePathInArm",
    keyName: "managementKey",
    kind: "Microsoft.EventHub",
    location: "West US",
    serviceBusNamespace: "sbn",
    sharedAccessKey: "someSecretvalue",
    time: "2017-04-01T19:20:33.2288820Z",
    timestampPropertyName: "someTimestampProperty"
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.eventSources.createOrUpdate(
    resourceGroupName,
    environmentName,
    eventSourceName,
    parameters
  );
  console.log(result);
}

eventSourcesCreateEventHubWithCustomEnquedTime().catch(console.error);