/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DaprComponents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  DaprComponent,
  DaprComponentsListNextOptionalParams,
  DaprComponentsListOptionalParams,
  DaprComponentsListResponse,
  DaprComponentsGetOptionalParams,
  DaprComponentsGetResponse,
  DaprComponentsCreateOrUpdateOptionalParams,
  DaprComponentsCreateOrUpdateResponse,
  DaprComponentsDeleteOptionalParams,
  DaprComponentsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DaprComponents operations. */
export class DaprComponentsImpl implements DaprComponents {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class DaprComponents class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Dapr Components for a managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams
  ): PagedAsyncIterableIterator<DaprComponent> {
    const iter = this.listPagingAll(
      resourceGroupName,
      environmentName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, environmentName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams
  ): AsyncIterableIterator<DaprComponent[]> {
    let result = await this._list(resourceGroupName, environmentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        environmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams
  ): AsyncIterableIterator<DaprComponent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      environmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Dapr Components for a managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams
  ): Promise<DaprComponentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listOperationSpec
    );
  }

  /**
   * Get a dapr component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr Component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    options?: DaprComponentsGetOptionalParams
  ): Promise<DaprComponentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, name, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Dapr Component in a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr Component.
   * @param daprComponentEnvelope Configuration details of the Dapr Component.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    daprComponentEnvelope: DaprComponent,
    options?: DaprComponentsCreateOrUpdateOptionalParams
  ): Promise<DaprComponentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        name,
        daprComponentEnvelope,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a Dapr Component from a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param name Name of the Dapr Component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    options?: DaprComponentsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    environmentName: string,
    nextLink: string,
    options?: DaprComponentsListNextOptionalParams
  ): Promise<DaprComponentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.daprComponentEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
