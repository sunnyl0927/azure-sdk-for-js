## API Report File for "@azure/arm-mysql-flexible"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface Backup {
    backupRetentionDays?: number;
    readonly earliestRestoreDate?: Date;
    geoRedundantBackup?: EnableStatusEnum;
}

// @public
export interface Backups {
    get(resourceGroupName: string, serverName: string, backupName: string, options?: BackupsGetOptionalParams): Promise<BackupsGetResponse>;
    listByServer(resourceGroupName: string, serverName: string, options?: BackupsListByServerOptionalParams): PagedAsyncIterableIterator<ServerBackup>;
}

// @public
export interface BackupsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BackupsGetResponse = ServerBackup;

// @public
export interface BackupsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BackupsListByServerNextResponse = ServerBackupListResult;

// @public
export interface BackupsListByServerOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BackupsListByServerResponse = ServerBackupListResult;

// @public
export interface CapabilitiesListResult {
    readonly nextLink?: string;
    readonly value?: CapabilityProperties[];
}

// @public
export interface CapabilityProperties {
    readonly supportedFlexibleServerEditions?: ServerEditionCapability[];
    readonly supportedGeoBackupRegions?: string[];
    readonly supportedHAMode?: string[];
    readonly zone?: string;
}

// @public
export interface CheckNameAvailability {
    execute(locationName: string, nameAvailabilityRequest: NameAvailabilityRequest, options?: CheckNameAvailabilityExecuteOptionalParams): Promise<CheckNameAvailabilityExecuteResponse>;
}

// @public
export interface CheckNameAvailabilityExecuteOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CheckNameAvailabilityExecuteResponse = NameAvailability;

// @public
export interface CheckVirtualNetworkSubnetUsage {
    execute(locationName: string, parameters: VirtualNetworkSubnetUsageParameter, options?: CheckVirtualNetworkSubnetUsageExecuteOptionalParams): Promise<CheckVirtualNetworkSubnetUsageExecuteResponse>;
}

// @public
export interface CheckVirtualNetworkSubnetUsageExecuteOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CheckVirtualNetworkSubnetUsageExecuteResponse = VirtualNetworkSubnetUsageResult;

// @public
export interface CloudError {
    error?: ErrorResponse;
}

// @public
export type Configuration = ProxyResource & {
    readonly systemData?: SystemData;
    value?: string;
    readonly description?: string;
    readonly defaultValue?: string;
    readonly dataType?: string;
    readonly allowedValues?: string;
    source?: ConfigurationSource;
    readonly isReadOnly?: IsReadOnly;
    readonly isConfigPendingRestart?: IsConfigPendingRestart;
    readonly isDynamicConfig?: IsDynamicConfig;
};

// @public
export interface ConfigurationForBatchUpdate {
    name?: string;
    source?: string;
    value?: string;
}

// @public
export interface ConfigurationListForBatchUpdate {
    value?: ConfigurationForBatchUpdate[];
}

// @public
export interface ConfigurationListResult {
    nextLink?: string;
    value?: Configuration[];
}

// @public
export interface Configurations {
    beginBatchUpdate(resourceGroupName: string, serverName: string, parameters: ConfigurationListForBatchUpdate, options?: ConfigurationsBatchUpdateOptionalParams): Promise<PollerLike<PollOperationState<ConfigurationsBatchUpdateResponse>, ConfigurationsBatchUpdateResponse>>;
    beginBatchUpdateAndWait(resourceGroupName: string, serverName: string, parameters: ConfigurationListForBatchUpdate, options?: ConfigurationsBatchUpdateOptionalParams): Promise<ConfigurationsBatchUpdateResponse>;
    beginUpdate(resourceGroupName: string, serverName: string, configurationName: string, parameters: Configuration, options?: ConfigurationsUpdateOptionalParams): Promise<PollerLike<PollOperationState<ConfigurationsUpdateResponse>, ConfigurationsUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, serverName: string, configurationName: string, parameters: Configuration, options?: ConfigurationsUpdateOptionalParams): Promise<ConfigurationsUpdateResponse>;
    get(resourceGroupName: string, serverName: string, configurationName: string, options?: ConfigurationsGetOptionalParams): Promise<ConfigurationsGetResponse>;
    listByServer(resourceGroupName: string, serverName: string, options?: ConfigurationsListByServerOptionalParams): PagedAsyncIterableIterator<Configuration>;
}

// @public
export interface ConfigurationsBatchUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ConfigurationsBatchUpdateResponse = ConfigurationListResult;

// @public
export interface ConfigurationsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConfigurationsGetResponse = Configuration;

// @public
export interface ConfigurationsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConfigurationsListByServerNextResponse = ConfigurationListResult;

// @public
export interface ConfigurationsListByServerOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConfigurationsListByServerResponse = ConfigurationListResult;

// @public
export type ConfigurationSource = string;

// @public
export interface ConfigurationsUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ConfigurationsUpdateResponse = Configuration;

// @public
export type CreatedByType = string;

// @public
export type CreateMode = string;

// @public
export type Database = ProxyResource & {
    readonly systemData?: SystemData;
    charset?: string;
    collation?: string;
};

// @public
export interface DatabaseListResult {
    nextLink?: string;
    value?: Database[];
}

// @public
export interface Databases {
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Database, options?: DatabasesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DatabasesCreateOrUpdateResponse>, DatabasesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, parameters: Database, options?: DatabasesCreateOrUpdateOptionalParams): Promise<DatabasesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesGetOptionalParams): Promise<DatabasesGetResponse>;
    listByServer(resourceGroupName: string, serverName: string, options?: DatabasesListByServerOptionalParams): PagedAsyncIterableIterator<Database>;
}

// @public
export interface DatabasesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type DatabasesCreateOrUpdateResponse = Database;

// @public
export interface DatabasesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface DatabasesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DatabasesGetResponse = Database;

// @public
export interface DatabasesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DatabasesListByServerNextResponse = DatabaseListResult;

// @public
export interface DatabasesListByServerOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DatabasesListByServerResponse = DatabaseListResult;

// @public
export interface DataEncryption {
    geoBackupKeyUri?: string;
    geoBackupUserAssignedIdentityId?: string;
    primaryKeyUri?: string;
    primaryUserAssignedIdentityId?: string;
    type?: DataEncryptionType;
}

// @public
export type DataEncryptionType = "AzureKeyVault" | "SystemManaged";

// @public
export interface DelegatedSubnetUsage {
    readonly subnetName?: string;
    readonly usage?: number;
}

// @public
export type EnableStatusEnum = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorResponse {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorResponse[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export type FirewallRule = ProxyResource & {
    readonly systemData?: SystemData;
    startIpAddress: string;
    endIpAddress: string;
};

// @public
export interface FirewallRuleListResult {
    nextLink?: string;
    value?: FirewallRule[];
}

// @public
export interface FirewallRules {
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: FirewallRule, options?: FirewallRulesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FirewallRulesCreateOrUpdateResponse>, FirewallRulesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: FirewallRule, options?: FirewallRulesCreateOrUpdateOptionalParams): Promise<FirewallRulesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: FirewallRulesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: FirewallRulesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: FirewallRulesGetOptionalParams): Promise<FirewallRulesGetResponse>;
    listByServer(resourceGroupName: string, serverName: string, options?: FirewallRulesListByServerOptionalParams): PagedAsyncIterableIterator<FirewallRule>;
}

// @public
export interface FirewallRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type FirewallRulesCreateOrUpdateResponse = FirewallRule;

// @public
export interface FirewallRulesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface FirewallRulesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type FirewallRulesGetResponse = FirewallRule;

// @public
export interface FirewallRulesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type FirewallRulesListByServerNextResponse = FirewallRuleListResult;

// @public
export interface FirewallRulesListByServerOptionalParams extends coreClient.OperationOptions {
}

// @public
export type FirewallRulesListByServerResponse = FirewallRuleListResult;

// @public
export interface GetPrivateDnsZoneSuffix {
    execute(options?: GetPrivateDnsZoneSuffixExecuteOptionalParams): Promise<GetPrivateDnsZoneSuffixExecuteResponse>;
}

// @public
export interface GetPrivateDnsZoneSuffixExecuteOptionalParams extends coreClient.OperationOptions {
}

// @public
export type GetPrivateDnsZoneSuffixExecuteResponse = GetPrivateDnsZoneSuffixResponse;

// @public
export interface GetPrivateDnsZoneSuffixResponse {
    privateDnsZoneSuffix?: string;
}

// @public
export interface HighAvailability {
    mode?: HighAvailabilityMode;
    standbyAvailabilityZone?: string;
    readonly state?: HighAvailabilityState;
}

// @public
export type HighAvailabilityMode = string;

// @public
export type HighAvailabilityState = string;

// @public
export interface Identity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: "UserAssigned";
    userAssignedIdentities?: {
        [propertyName: string]: Record<string, unknown>;
    };
}

// @public
export type IsConfigPendingRestart = string;

// @public
export type IsDynamicConfig = string;

// @public
export type IsReadOnly = string;

// @public
export enum KnownConfigurationSource {
    // (undocumented)
    SystemDefault = "system-default",
    // (undocumented)
    UserOverride = "user-override"
}

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownCreateMode {
    // (undocumented)
    Default = "Default",
    // (undocumented)
    GeoRestore = "GeoRestore",
    // (undocumented)
    PointInTimeRestore = "PointInTimeRestore",
    // (undocumented)
    Replica = "Replica"
}

// @public
export enum KnownEnableStatusEnum {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Enabled = "Enabled"
}

// @public
export enum KnownHighAvailabilityMode {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    SameZone = "SameZone",
    // (undocumented)
    ZoneRedundant = "ZoneRedundant"
}

// @public
export enum KnownHighAvailabilityState {
    // (undocumented)
    CreatingStandby = "CreatingStandby",
    // (undocumented)
    FailingOver = "FailingOver",
    // (undocumented)
    Healthy = "Healthy",
    // (undocumented)
    NotEnabled = "NotEnabled",
    // (undocumented)
    RemovingStandby = "RemovingStandby"
}

// @public
export enum KnownIsConfigPendingRestart {
    // (undocumented)
    False = "False",
    // (undocumented)
    True = "True"
}

// @public
export enum KnownIsDynamicConfig {
    // (undocumented)
    False = "False",
    // (undocumented)
    True = "True"
}

// @public
export enum KnownIsReadOnly {
    // (undocumented)
    False = "False",
    // (undocumented)
    True = "True"
}

// @public
export enum KnownReplicationRole {
    // (undocumented)
    None = "None",
    // (undocumented)
    Replica = "Replica",
    // (undocumented)
    Source = "Source"
}

// @public
export enum KnownServerState {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Dropping = "Dropping",
    // (undocumented)
    Ready = "Ready",
    // (undocumented)
    Starting = "Starting",
    // (undocumented)
    Stopped = "Stopped",
    // (undocumented)
    Stopping = "Stopping",
    // (undocumented)
    Updating = "Updating"
}

// @public
export enum KnownServerVersion {
    // (undocumented)
    Eight021 = "8.0.21",
    // (undocumented)
    Five7 = "5.7"
}

// @public
export enum KnownSkuTier {
    // (undocumented)
    Burstable = "Burstable",
    // (undocumented)
    GeneralPurpose = "GeneralPurpose",
    // (undocumented)
    MemoryOptimized = "MemoryOptimized"
}

// @public
export interface LocationBasedCapabilities {
    list(locationName: string, options?: LocationBasedCapabilitiesListOptionalParams): PagedAsyncIterableIterator<CapabilityProperties>;
}

// @public
export interface LocationBasedCapabilitiesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LocationBasedCapabilitiesListNextResponse = CapabilitiesListResult;

// @public
export interface LocationBasedCapabilitiesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LocationBasedCapabilitiesListResponse = CapabilitiesListResult;

// @public
export interface MaintenanceWindow {
    customWindow?: string;
    dayOfWeek?: number;
    startHour?: number;
    startMinute?: number;
}

// @public (undocumented)
export class MySQLManagementFlexibleServerClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: MySQLManagementFlexibleServerClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    backups: Backups;
    // (undocumented)
    checkNameAvailability: CheckNameAvailability;
    // (undocumented)
    checkVirtualNetworkSubnetUsage: CheckVirtualNetworkSubnetUsage;
    // (undocumented)
    configurations: Configurations;
    // (undocumented)
    databases: Databases;
    // (undocumented)
    firewallRules: FirewallRules;
    // (undocumented)
    getPrivateDnsZoneSuffix: GetPrivateDnsZoneSuffix;
    // (undocumented)
    locationBasedCapabilities: LocationBasedCapabilities;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    replicas: Replicas;
    // (undocumented)
    servers: Servers;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface MySQLManagementFlexibleServerClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface NameAvailability {
    message?: string;
    nameAvailable?: boolean;
    reason?: string;
}

// @public
export interface NameAvailabilityRequest {
    name: string;
    type?: string;
}

// @public
export interface Network {
    delegatedSubnetResourceId?: string;
    privateDnsZoneResourceId?: string;
    readonly publicNetworkAccess?: EnableStatusEnum;
}

// @public
export interface Operation {
    display?: OperationDisplay;
    name?: string;
    origin?: string;
    properties?: {
        [propertyName: string]: Record<string, unknown>;
    };
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type ProxyResource = Resource & {};

// @public
export interface Replicas {
    listByServer(resourceGroupName: string, serverName: string, options?: ReplicasListByServerOptionalParams): PagedAsyncIterableIterator<Server>;
}

// @public
export interface ReplicasListByServerNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ReplicasListByServerNextResponse = ServerListResult;

// @public
export interface ReplicasListByServerOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ReplicasListByServerResponse = ServerListResult;

// @public
export type ReplicationRole = string;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export type Server = TrackedResource & {
    identity?: Identity;
    sku?: Sku;
    readonly systemData?: SystemData;
    administratorLogin?: string;
    administratorLoginPassword?: string;
    version?: ServerVersion;
    availabilityZone?: string;
    createMode?: CreateMode;
    sourceServerResourceId?: string;
    restorePointInTime?: Date;
    replicationRole?: ReplicationRole;
    readonly replicaCapacity?: number;
    dataEncryption?: DataEncryption;
    readonly state?: ServerState;
    readonly fullyQualifiedDomainName?: string;
    storage?: Storage_2;
    backup?: Backup;
    highAvailability?: HighAvailability;
    network?: Network;
    maintenanceWindow?: MaintenanceWindow;
};

// @public
export type ServerBackup = ProxyResource & {
    readonly systemData?: SystemData;
    backupType?: string;
    completedTime?: Date;
    source?: string;
};

// @public
export interface ServerBackupListResult {
    nextLink?: string;
    value?: ServerBackup[];
}

// @public
export interface ServerEditionCapability {
    readonly name?: string;
    readonly supportedServerVersions?: ServerVersionCapability[];
    readonly supportedStorageEditions?: StorageEditionCapability[];
}

// @public
export interface ServerForUpdate {
    administratorLoginPassword?: string;
    backup?: Backup;
    dataEncryption?: DataEncryption;
    highAvailability?: HighAvailability;
    identity?: Identity;
    maintenanceWindow?: MaintenanceWindow;
    replicationRole?: ReplicationRole;
    sku?: Sku;
    storage?: Storage_2;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface ServerListResult {
    nextLink?: string;
    value?: Server[];
}

// @public
export interface ServerRestartParameter {
    maxFailoverSeconds?: number;
    restartWithFailover?: EnableStatusEnum;
}

// @public
export interface Servers {
    beginCreate(resourceGroupName: string, serverName: string, parameters: Server, options?: ServersCreateOptionalParams): Promise<PollerLike<PollOperationState<ServersCreateResponse>, ServersCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, serverName: string, parameters: Server, options?: ServersCreateOptionalParams): Promise<ServersCreateResponse>;
    beginDelete(resourceGroupName: string, serverName: string, options?: ServersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, serverName: string, options?: ServersDeleteOptionalParams): Promise<void>;
    beginFailover(resourceGroupName: string, serverName: string, options?: ServersFailoverOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginFailoverAndWait(resourceGroupName: string, serverName: string, options?: ServersFailoverOptionalParams): Promise<void>;
    beginRestart(resourceGroupName: string, serverName: string, parameters: ServerRestartParameter, options?: ServersRestartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginRestartAndWait(resourceGroupName: string, serverName: string, parameters: ServerRestartParameter, options?: ServersRestartOptionalParams): Promise<void>;
    beginStart(resourceGroupName: string, serverName: string, options?: ServersStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginStartAndWait(resourceGroupName: string, serverName: string, options?: ServersStartOptionalParams): Promise<void>;
    beginStop(resourceGroupName: string, serverName: string, options?: ServersStopOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginStopAndWait(resourceGroupName: string, serverName: string, options?: ServersStopOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, serverName: string, parameters: ServerForUpdate, options?: ServersUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServersUpdateResponse>, ServersUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, serverName: string, parameters: ServerForUpdate, options?: ServersUpdateOptionalParams): Promise<ServersUpdateResponse>;
    get(resourceGroupName: string, serverName: string, options?: ServersGetOptionalParams): Promise<ServersGetResponse>;
    list(options?: ServersListOptionalParams): PagedAsyncIterableIterator<Server>;
    listByResourceGroup(resourceGroupName: string, options?: ServersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Server>;
}

// @public
export interface ServersCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServersCreateResponse = Server;

// @public
export interface ServersDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ServersFailoverOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ServersGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServersGetResponse = Server;

// @public
export interface ServersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServersListByResourceGroupNextResponse = ServerListResult;

// @public
export interface ServersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServersListByResourceGroupResponse = ServerListResult;

// @public
export interface ServersListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServersListNextResponse = ServerListResult;

// @public
export interface ServersListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ServersListResponse = ServerListResult;

// @public
export interface ServersRestartOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ServersStartOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ServersStopOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServerState = string;

// @public
export interface ServersUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ServersUpdateResponse = Server;

// @public
export type ServerVersion = string;

// @public
export interface ServerVersionCapability {
    readonly name?: string;
    readonly supportedSkus?: SkuCapability[];
}

// @public
export interface Sku {
    name: string;
    tier: SkuTier;
}

// @public
export interface SkuCapability {
    readonly name?: string;
    readonly supportedIops?: number;
    readonly supportedMemoryPerVCoreMB?: number;
    readonly vCores?: number;
}

// @public
export type SkuTier = string;

// @public
interface Storage_2 {
    autoGrow?: EnableStatusEnum;
    iops?: number;
    storageSizeGB?: number;
    readonly storageSku?: string;
}
export { Storage_2 as Storage }

// @public
export interface StorageEditionCapability {
    readonly maxBackupRetentionDays?: number;
    readonly maxStorageSize?: number;
    readonly minBackupRetentionDays?: number;
    readonly minStorageSize?: number;
    readonly name?: string;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export type TrackedResource = Resource & {
    tags?: {
        [propertyName: string]: string;
    };
    location: string;
};

// @public
export interface UserAssignedIdentity {
    readonly clientId?: string;
    readonly principalId?: string;
}

// @public
export interface VirtualNetworkSubnetUsageParameter {
    virtualNetworkResourceId?: string;
}

// @public
export interface VirtualNetworkSubnetUsageResult {
    readonly delegatedSubnetsUsage?: DelegatedSubnetUsage[];
}

// (No @packageDocumentation comment for this package)

```
