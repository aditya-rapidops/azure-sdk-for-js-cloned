/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IpCommunities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  IpCommunity,
  IpCommunitiesListByResourceGroupNextOptionalParams,
  IpCommunitiesListByResourceGroupOptionalParams,
  IpCommunitiesListByResourceGroupResponse,
  IpCommunitiesListBySubscriptionNextOptionalParams,
  IpCommunitiesListBySubscriptionOptionalParams,
  IpCommunitiesListBySubscriptionResponse,
  IpCommunitiesCreateOptionalParams,
  IpCommunitiesCreateResponse,
  IpCommunitiesGetOptionalParams,
  IpCommunitiesGetResponse,
  IpCommunityPatch,
  IpCommunitiesUpdateOptionalParams,
  IpCommunitiesUpdateResponse,
  IpCommunitiesDeleteOptionalParams,
  IpCommunitiesDeleteResponse,
  IpCommunitiesListByResourceGroupNextResponse,
  IpCommunitiesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IpCommunities operations. */
export class IpCommunitiesImpl implements IpCommunities {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class IpCommunities class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements IP Communities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IpCommunitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IpCommunity> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: IpCommunitiesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IpCommunity[]> {
    let result: IpCommunitiesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: IpCommunitiesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<IpCommunity> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Implements IP Communities list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IpCommunitiesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IpCommunity> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IpCommunitiesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IpCommunity[]> {
    let result: IpCommunitiesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: IpCommunitiesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<IpCommunity> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements an IP Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunity,
    options?: IpCommunitiesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesCreateResponse>,
      IpCommunitiesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpCommunitiesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, ipCommunityName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      IpCommunitiesCreateResponse,
      OperationState<IpCommunitiesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements an IP Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunity,
    options?: IpCommunitiesCreateOptionalParams
  ): Promise<IpCommunitiesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      ipCommunityName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements an IP Community GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesGetOptionalParams
  ): Promise<IpCommunitiesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ipCommunityName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the IP Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body IP Community properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunityPatch,
    options?: IpCommunitiesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesUpdateResponse>,
      IpCommunitiesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpCommunitiesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, ipCommunityName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      IpCommunitiesUpdateResponse,
      OperationState<IpCommunitiesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the IP Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body IP Community properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunityPatch,
    options?: IpCommunitiesUpdateOptionalParams
  ): Promise<IpCommunitiesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      ipCommunityName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesDeleteResponse>,
      IpCommunitiesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpCommunitiesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, ipCommunityName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      IpCommunitiesDeleteResponse,
      OperationState<IpCommunitiesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements IP Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesDeleteOptionalParams
  ): Promise<IpCommunitiesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      ipCommunityName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Communities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IpCommunitiesListByResourceGroupOptionalParams
  ): Promise<IpCommunitiesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Implements IP Communities list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IpCommunitiesListBySubscriptionOptionalParams
  ): Promise<IpCommunitiesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: IpCommunitiesListByResourceGroupNextOptionalParams
  ): Promise<IpCommunitiesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IpCommunitiesListBySubscriptionNextOptionalParams
  ): Promise<IpCommunitiesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunity
    },
    201: {
      bodyMapper: Mappers.IpCommunity
    },
    202: {
      bodyMapper: Mappers.IpCommunity
    },
    204: {
      bodyMapper: Mappers.IpCommunity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipCommunityName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipCommunityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunity
    },
    201: {
      bodyMapper: Mappers.IpCommunity
    },
    202: {
      bodyMapper: Mappers.IpCommunity
    },
    204: {
      bodyMapper: Mappers.IpCommunity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipCommunityName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.IpCommunitiesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.IpCommunitiesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.IpCommunitiesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.IpCommunitiesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipCommunityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunitiesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunitiesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunitiesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpCommunitiesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
