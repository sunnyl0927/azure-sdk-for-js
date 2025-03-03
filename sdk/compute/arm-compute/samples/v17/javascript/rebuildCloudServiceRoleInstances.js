/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and initializes the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instances.
 *
 * @summary Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and initializes the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instances.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/RebuildCloudServiceRoleInstances.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function rebuildCloudServiceRoleInstances() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const parameters = {
    roleInstances: ["ContosoFrontend_IN_0", "ContosoBackend_IN_1"],
  };
  const options = { parameters: parameters };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServices.beginRebuildAndWait(
    resourceGroupName,
    cloudServiceName,
    options
  );
  console.log(result);
}

rebuildCloudServiceRoleInstances().catch(console.error);
