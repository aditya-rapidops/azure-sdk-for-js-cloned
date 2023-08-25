/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiWikis } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  WikiContract,
  ApiWikisListNextOptionalParams,
  ApiWikisListOptionalParams,
  ApiWikisListResponse,
  ApiWikisListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiWikis operations. */
export class ApiWikisImpl implements ApiWikis {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiWikis class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets the wikis for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikisListOptionalParams
  ): PagedAsyncIterableIterator<WikiContract> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikisListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<WikiContract[]> {
    let result: ApiWikisListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serviceName, apiId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikisListOptionalParams
  ): AsyncIterableIterator<WikiContract> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the wikis for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikisListOptionalParams
  ): Promise<ApiWikisListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: ApiWikisListNextOptionalParams
  ): Promise<ApiWikisListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/wikis",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WikiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WikiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
