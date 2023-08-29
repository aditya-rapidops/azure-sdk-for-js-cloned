/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ContentItem } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ContentItemContract,
  ContentItemListByServiceNextOptionalParams,
  ContentItemListByServiceOptionalParams,
  ContentItemListByServiceResponse,
  ContentItemGetEntityTagOptionalParams,
  ContentItemGetEntityTagResponse,
  ContentItemGetOptionalParams,
  ContentItemGetResponse,
  ContentItemCreateOrUpdateOptionalParams,
  ContentItemCreateOrUpdateResponse,
  ContentItemDeleteOptionalParams,
  ContentItemListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContentItem operations. */
export class ContentItemImpl implements ContentItem {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ContentItem class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists developer portal's content items specified by the provided content type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    options?: ContentItemListByServiceOptionalParams
  ): PagedAsyncIterableIterator<ContentItemContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      contentTypeId,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          contentTypeId,
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    options?: ContentItemListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ContentItemContract[]> {
    let result: ContentItemListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        contentTypeId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        contentTypeId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    options?: ContentItemListByServiceOptionalParams
  ): AsyncIterableIterator<ContentItemContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      contentTypeId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists developer portal's content items specified by the provided content type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    options?: ContentItemListByServiceOptionalParams
  ): Promise<ContentItemListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, contentTypeId, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Returns the entity state (ETag) version of the developer portal's content item specified by its
   * identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    contentItemId: string,
    options?: ContentItemGetEntityTagOptionalParams
  ): Promise<ContentItemGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, contentTypeId, contentItemId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Returns the developer portal's content item specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    contentItemId: string,
    options?: ContentItemGetOptionalParams
  ): Promise<ContentItemGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, contentTypeId, contentItemId, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new developer portal's content item specified by the provided content type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    contentItemId: string,
    parameters: ContentItemContract,
    options?: ContentItemCreateOrUpdateOptionalParams
  ): Promise<ContentItemCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Removes the specified developer portal's content item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    contentItemId: string,
    ifMatch: string,
    options?: ContentItemDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        ifMatch,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    contentTypeId: string,
    nextLink: string,
    options?: ContentItemListByServiceNextOptionalParams
  ): Promise<ContentItemListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, contentTypeId, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.contentTypeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ContentItemGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.contentTypeId,
    Parameters.contentItemId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.contentTypeId,
    Parameters.contentItemId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.contentTypeId,
    Parameters.contentItemId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.contentTypeId,
    Parameters.contentItemId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemCollection
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
    Parameters.contentTypeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
