/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IssueCommentContract,
  ApiIssueCommentListByServiceOptionalParams,
  ApiIssueCommentGetEntityTagOptionalParams,
  ApiIssueCommentGetEntityTagResponse,
  ApiIssueCommentGetOptionalParams,
  ApiIssueCommentGetResponse,
  ApiIssueCommentCreateOrUpdateOptionalParams,
  ApiIssueCommentCreateOrUpdateResponse,
  ApiIssueCommentDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiIssueComment. */
export interface ApiIssueComment {
  /**
   * Lists all comments for the Issue associated with the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    options?: ApiIssueCommentListByServiceOptionalParams
  ): PagedAsyncIterableIterator<IssueCommentContract>;
  /**
   * Gets the entity state (Etag) version of the issue Comment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    options?: ApiIssueCommentGetEntityTagOptionalParams
  ): Promise<ApiIssueCommentGetEntityTagResponse>;
  /**
   * Gets the details of the issue Comment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    options?: ApiIssueCommentGetOptionalParams
  ): Promise<ApiIssueCommentGetResponse>;
  /**
   * Creates a new Comment for the Issue in an API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    parameters: IssueCommentContract,
    options?: ApiIssueCommentCreateOrUpdateOptionalParams
  ): Promise<ApiIssueCommentCreateOrUpdateResponse>;
  /**
   * Deletes the specified comment from an Issue.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    ifMatch: string,
    options?: ApiIssueCommentDeleteOptionalParams
  ): Promise<void>;
}
