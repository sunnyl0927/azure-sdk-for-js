/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SqlScriptOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SqlScriptResource,
  SqlScriptGetSqlScriptsByWorkspaceNextOptionalParams,
  SqlScriptGetSqlScriptsByWorkspaceOptionalParams,
  SqlScriptGetSqlScriptsByWorkspaceResponse,
  SqlScriptCreateOrUpdateSqlScriptOptionalParams,
  SqlScriptCreateOrUpdateSqlScriptResponse,
  SqlScriptGetSqlScriptOptionalParams,
  SqlScriptGetSqlScriptResponse,
  SqlScriptDeleteSqlScriptOptionalParams,
  ArtifactRenameRequest,
  SqlScriptRenameSqlScriptOptionalParams,
  SqlScriptGetSqlScriptsByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlScriptOperations operations. */
export class SqlScriptOperationsImpl implements SqlScriptOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class SqlScriptOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists sql scripts.
   * @param options The options parameters.
   */
  public listSqlScriptsByWorkspace(
    options?: SqlScriptGetSqlScriptsByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<SqlScriptResource> {
    const iter = this.getSqlScriptsByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getSqlScriptsByWorkspacePagingPage(options);
      }
    };
  }

  private async *getSqlScriptsByWorkspacePagingPage(
    options?: SqlScriptGetSqlScriptsByWorkspaceOptionalParams
  ): AsyncIterableIterator<SqlScriptResource[]> {
    let result = await this._getSqlScriptsByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getSqlScriptsByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getSqlScriptsByWorkspacePagingAll(
    options?: SqlScriptGetSqlScriptsByWorkspaceOptionalParams
  ): AsyncIterableIterator<SqlScriptResource> {
    for await (const page of this.getSqlScriptsByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists sql scripts.
   * @param options The options parameters.
   */
  private async _getSqlScriptsByWorkspace(
    options?: SqlScriptGetSqlScriptsByWorkspaceOptionalParams
  ): Promise<SqlScriptGetSqlScriptsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getSqlScriptsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getSqlScriptsByWorkspaceOperationSpec
      );
      return result as SqlScriptGetSqlScriptsByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param sqlScript Sql Script resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateSqlScript(
    sqlScriptName: string,
    sqlScript: SqlScriptResource,
    options?: SqlScriptCreateOrUpdateSqlScriptOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlScriptCreateOrUpdateSqlScriptResponse>,
      SqlScriptCreateOrUpdateSqlScriptResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateSqlScript",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlScriptCreateOrUpdateSqlScriptResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as SqlScriptCreateOrUpdateSqlScriptResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { sqlScriptName, sqlScript, options },
      createOrUpdateSqlScriptOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param sqlScript Sql Script resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateSqlScriptAndWait(
    sqlScriptName: string,
    sqlScript: SqlScriptResource,
    options?: SqlScriptCreateOrUpdateSqlScriptOptionalParams
  ): Promise<SqlScriptCreateOrUpdateSqlScriptResponse> {
    const poller = await this.beginCreateOrUpdateSqlScript(
      sqlScriptName,
      sqlScript,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a sql script.
   * @param sqlScriptName The sql script name.
   * @param options The options parameters.
   */
  async getSqlScript(
    sqlScriptName: string,
    options?: SqlScriptGetSqlScriptOptionalParams
  ): Promise<SqlScriptGetSqlScriptResponse> {
    const { span } = createSpan("ArtifactsClient-getSqlScript", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { sqlScriptName, options },
        getSqlScriptOperationSpec
      );
      return result as SqlScriptGetSqlScriptResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param options The options parameters.
   */
  async beginDeleteSqlScript(
    sqlScriptName: string,
    options?: SqlScriptDeleteSqlScriptOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteSqlScript",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { sqlScriptName, options },
      deleteSqlScriptOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param options The options parameters.
   */
  async beginDeleteSqlScriptAndWait(
    sqlScriptName: string,
    options?: SqlScriptDeleteSqlScriptOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteSqlScript(sqlScriptName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a sqlScript.
   * @param sqlScriptName The sql script name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameSqlScript(
    sqlScriptName: string,
    request: ArtifactRenameRequest,
    options?: SqlScriptRenameSqlScriptOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenameSqlScript",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { sqlScriptName, request, options },
      renameSqlScriptOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Renames a sqlScript.
   * @param sqlScriptName The sql script name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameSqlScriptAndWait(
    sqlScriptName: string,
    request: ArtifactRenameRequest,
    options?: SqlScriptRenameSqlScriptOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenameSqlScript(
      sqlScriptName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * GetSqlScriptsByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetSqlScriptsByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getSqlScriptsByWorkspaceNext(
    nextLink: string,
    options?: SqlScriptGetSqlScriptsByWorkspaceNextOptionalParams
  ): Promise<SqlScriptGetSqlScriptsByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getSqlScriptsByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getSqlScriptsByWorkspaceNextOperationSpec
      );
      return result as SqlScriptGetSqlScriptsByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSqlScriptsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/sqlScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptsListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateSqlScriptOperationSpec: coreClient.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptResource
    },
    201: {
      bodyMapper: Mappers.SqlScriptResource
    },
    202: {
      bodyMapper: Mappers.SqlScriptResource
    },
    204: {
      bodyMapper: Mappers.SqlScriptResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sqlScript,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getSqlScriptOperationSpec: coreClient.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteSqlScriptOperationSpec: coreClient.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
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
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameSqlScriptOperationSpec: coreClient.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSqlScriptsByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptsListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
