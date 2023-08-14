/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Metrics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMonitorMetricBatchContext } from "../azureMonitorMetricBatchContext";
import {
  ResourceIdList,
  MetricsBatchOptionalParams,
  MetricsBatchResponse
} from "../models";

/** Class containing Metrics operations. */
export class MetricsImpl implements Metrics {
  private readonly client: AzureMonitorMetricBatchContext;

  /**
   * Initialize a new instance of the class Metrics class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMonitorMetricBatchContext) {
    this.client = client;
  }

  /**
   * Lists the metric values for multiple resources.
   * @param baseUrl The regional endpoint to use, for example https://eastus.metrics.monitor.azure.com.
   *                The region should match the region of the requested resources. For global resources, the region
   *                should be 'global'.
   * @param subscriptionId The subscription identifier for the resources in this batch.
   * @param metricnamespace Metric namespace that contains the requested metric names.
   * @param metricnames The names of the metrics (comma separated) to retrieve.
   * @param resourceIds The comma separated list of resource IDs to query metrics for.
   * @param options The options parameters.
   */
  batch(
    baseUrl: string,
    subscriptionId: string,
    metricnamespace: string,
    metricnames: string[],
    resourceIds: ResourceIdList,
    options?: MetricsBatchOptionalParams
  ): Promise<MetricsBatchResponse> {
    return this.client.sendOperationRequest(
      {
        baseUrl,
        subscriptionId,
        metricnamespace,
        metricnames,
        resourceIds,
        options
      },
      batchOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const batchOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/metrics:getBatch",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MetricResultsResponse
    },
    default: {
      bodyMapper: Mappers.AdditionalInfoErrorResponse,
      headersMapper: Mappers.MetricsBatchExceptionHeaders
    }
  },
  requestBody: Parameters.resourceIds,
  queryParameters: [
    Parameters.starttime,
    Parameters.endtime,
    Parameters.interval,
    Parameters.metricnamespace,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.baseUrl, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
