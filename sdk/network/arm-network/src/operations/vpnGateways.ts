/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VpnGateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VpnGateway,
  VpnGatewaysListByResourceGroupNextOptionalParams,
  VpnGatewaysListByResourceGroupOptionalParams,
  VpnGatewaysListByResourceGroupResponse,
  VpnGatewaysListNextOptionalParams,
  VpnGatewaysListOptionalParams,
  VpnGatewaysListResponse,
  VpnGatewaysGetOptionalParams,
  VpnGatewaysGetResponse,
  VpnGatewaysCreateOrUpdateOptionalParams,
  VpnGatewaysCreateOrUpdateResponse,
  TagsObject,
  VpnGatewaysUpdateTagsOptionalParams,
  VpnGatewaysUpdateTagsResponse,
  VpnGatewaysDeleteOptionalParams,
  VpnGatewaysResetOptionalParams,
  VpnGatewaysResetResponse,
  VpnGatewaysStartPacketCaptureOptionalParams,
  VpnGatewaysStartPacketCaptureResponse,
  VpnGatewaysStopPacketCaptureOptionalParams,
  VpnGatewaysStopPacketCaptureResponse,
  VpnGatewaysListByResourceGroupNextResponse,
  VpnGatewaysListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VpnGateways operations. */
export class VpnGatewaysImpl implements VpnGateways {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnGateways class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the VpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VpnGatewaysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VpnGateway> {
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
    options?: VpnGatewaysListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VpnGateway[]> {
    let result: VpnGatewaysListByResourceGroupResponse;
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
    options?: VpnGatewaysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VpnGateway> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the VpnGateways in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VpnGatewaysListOptionalParams
  ): PagedAsyncIterableIterator<VpnGateway> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: VpnGatewaysListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VpnGateway[]> {
    let result: VpnGatewaysListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: VpnGatewaysListOptionalParams
  ): AsyncIterableIterator<VpnGateway> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves the details of a virtual wan vpn gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysGetOptionalParams
  ): Promise<VpnGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    vpnGatewayParameters: VpnGateway,
    options?: VpnGatewaysCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VpnGatewaysCreateOrUpdateResponse>,
      VpnGatewaysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VpnGatewaysCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, gatewayName, vpnGatewayParameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      VpnGatewaysCreateOrUpdateResponse,
      OperationState<VpnGatewaysCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    vpnGatewayParameters: VpnGateway,
    options?: VpnGatewaysCreateOrUpdateOptionalParams
  ): Promise<VpnGatewaysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gatewayName,
      vpnGatewayParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates virtual wan vpn gateway tags.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway tags.
   * @param options The options parameters.
   */
  async beginUpdateTags(
    resourceGroupName: string,
    gatewayName: string,
    vpnGatewayParameters: TagsObject,
    options?: VpnGatewaysUpdateTagsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VpnGatewaysUpdateTagsResponse>,
      VpnGatewaysUpdateTagsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VpnGatewaysUpdateTagsResponse> => {
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
      args: { resourceGroupName, gatewayName, vpnGatewayParameters, options },
      spec: updateTagsOperationSpec
    });
    const poller = await createHttpPoller<
      VpnGatewaysUpdateTagsResponse,
      OperationState<VpnGatewaysUpdateTagsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates virtual wan vpn gateway tags.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway tags.
   * @param options The options parameters.
   */
  async beginUpdateTagsAndWait(
    resourceGroupName: string,
    gatewayName: string,
    vpnGatewayParameters: TagsObject,
    options?: VpnGatewaysUpdateTagsOptionalParams
  ): Promise<VpnGatewaysUpdateTagsResponse> {
    const poller = await this.beginUpdateTags(
      resourceGroupName,
      gatewayName,
      vpnGatewayParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a virtual wan vpn gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      args: { resourceGroupName, gatewayName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a virtual wan vpn gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Resets the primary of the vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginReset(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysResetOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VpnGatewaysResetResponse>,
      VpnGatewaysResetResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VpnGatewaysResetResponse> => {
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
      args: { resourceGroupName, gatewayName, options },
      spec: resetOperationSpec
    });
    const poller = await createHttpPoller<
      VpnGatewaysResetResponse,
      OperationState<VpnGatewaysResetResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Resets the primary of the vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginResetAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysResetOptionalParams
  ): Promise<VpnGatewaysResetResponse> {
    const poller = await this.beginReset(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts packet capture on vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginStartPacketCapture(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysStartPacketCaptureOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VpnGatewaysStartPacketCaptureResponse>,
      VpnGatewaysStartPacketCaptureResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VpnGatewaysStartPacketCaptureResponse> => {
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
      args: { resourceGroupName, gatewayName, options },
      spec: startPacketCaptureOperationSpec
    });
    const poller = await createHttpPoller<
      VpnGatewaysStartPacketCaptureResponse,
      OperationState<VpnGatewaysStartPacketCaptureResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Starts packet capture on vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginStartPacketCaptureAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysStartPacketCaptureOptionalParams
  ): Promise<VpnGatewaysStartPacketCaptureResponse> {
    const poller = await this.beginStartPacketCapture(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Stops packet capture on vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginStopPacketCapture(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysStopPacketCaptureOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VpnGatewaysStopPacketCaptureResponse>,
      VpnGatewaysStopPacketCaptureResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VpnGatewaysStopPacketCaptureResponse> => {
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
      args: { resourceGroupName, gatewayName, options },
      spec: stopPacketCaptureOperationSpec
    });
    const poller = await createHttpPoller<
      VpnGatewaysStopPacketCaptureResponse,
      OperationState<VpnGatewaysStopPacketCaptureResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Stops packet capture on vpn gateway in the specified resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginStopPacketCaptureAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnGatewaysStopPacketCaptureOptionalParams
  ): Promise<VpnGatewaysStopPacketCaptureResponse> {
    const poller = await this.beginStopPacketCapture(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the VpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VpnGatewaysListByResourceGroupOptionalParams
  ): Promise<VpnGatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the VpnGateways in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VpnGatewaysListOptionalParams
  ): Promise<VpnGatewaysListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VpnGatewaysListByResourceGroupNextOptionalParams
  ): Promise<VpnGatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VpnGatewaysListNextOptionalParams
  ): Promise<VpnGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    201: {
      bodyMapper: Mappers.VpnGateway
    },
    202: {
      bodyMapper: Mappers.VpnGateway
    },
    204: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.vpnGatewayParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    201: {
      bodyMapper: Mappers.VpnGateway
    },
    202: {
      bodyMapper: Mappers.VpnGateway
    },
    204: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.vpnGatewayParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/reset",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    201: {
      bodyMapper: Mappers.VpnGateway
    },
    202: {
      bodyMapper: Mappers.VpnGateway
    },
    204: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.ipConfigurationId],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startPacketCaptureOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/startpacketcapture",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    201: {
      bodyMapper: { type: { name: "String" } }
    },
    202: {
      bodyMapper: { type: { name: "String" } }
    },
    204: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters83,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const stopPacketCaptureOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/stoppacketcapture",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    201: {
      bodyMapper: { type: { name: "String" } }
    },
    202: {
      bodyMapper: { type: { name: "String" } }
    },
    204: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters84,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
