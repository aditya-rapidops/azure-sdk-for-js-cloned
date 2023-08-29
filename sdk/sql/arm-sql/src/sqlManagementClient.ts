/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  DataMaskingPoliciesImpl,
  DataMaskingRulesImpl,
  GeoBackupPoliciesImpl,
  DatabasesImpl,
  ElasticPoolsImpl,
  ServerCommunicationLinksImpl,
  ServiceObjectivesImpl,
  ElasticPoolActivitiesImpl,
  ElasticPoolDatabaseActivitiesImpl,
  ServerUsagesImpl,
  DatabaseAdvisorsImpl,
  DatabaseAutomaticTuningOperationsImpl,
  DatabaseColumnsImpl,
  DatabaseRecommendedActionsImpl,
  DatabaseSchemasImpl,
  DatabaseSecurityAlertPoliciesImpl,
  DatabaseTablesImpl,
  DatabaseVulnerabilityAssessmentRuleBaselinesImpl,
  DatabaseVulnerabilityAssessmentsImpl,
  DatabaseVulnerabilityAssessmentScansImpl,
  DataWarehouseUserActivitiesOperationsImpl,
  DeletedServersImpl,
  ElasticPoolOperationsImpl,
  EncryptionProtectorsImpl,
  FirewallRulesImpl,
  InstancePoolsImpl,
  JobAgentsImpl,
  JobCredentialsImpl,
  JobExecutionsImpl,
  JobsImpl,
  JobStepExecutionsImpl,
  JobStepsImpl,
  JobTargetExecutionsImpl,
  JobTargetGroupsImpl,
  JobVersionsImpl,
  CapabilitiesImpl,
  LongTermRetentionPoliciesImpl,
  MaintenanceWindowOptionsOperationsImpl,
  MaintenanceWindowsOperationsImpl,
  ManagedBackupShortTermRetentionPoliciesImpl,
  ManagedDatabaseColumnsImpl,
  ManagedDatabaseQueriesImpl,
  ManagedDatabaseSchemasImpl,
  ManagedDatabaseSecurityAlertPoliciesImpl,
  ManagedDatabaseSecurityEventsImpl,
  ManagedDatabaseTablesImpl,
  ManagedDatabaseTransparentDataEncryptionImpl,
  ManagedDatabaseVulnerabilityAssessmentRuleBaselinesImpl,
  ManagedDatabaseVulnerabilityAssessmentsImpl,
  ManagedDatabaseVulnerabilityAssessmentScansImpl,
  ManagedInstanceAdministratorsImpl,
  ManagedInstanceAzureADOnlyAuthenticationsImpl,
  ManagedInstanceEncryptionProtectorsImpl,
  ManagedInstanceKeysImpl,
  ManagedInstanceLongTermRetentionPoliciesImpl,
  ManagedInstanceOperationsImpl,
  ManagedInstancePrivateEndpointConnectionsImpl,
  ManagedInstancePrivateLinkResourcesImpl,
  ManagedInstanceTdeCertificatesImpl,
  ManagedInstanceVulnerabilityAssessmentsImpl,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesImpl,
  ManagedServerSecurityAlertPoliciesImpl,
  OperationsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  RecoverableManagedDatabasesImpl,
  RestorePointsImpl,
  ServerAdvisorsImpl,
  ServerAutomaticTuningOperationsImpl,
  ServerAzureADAdministratorsImpl,
  ServerAzureADOnlyAuthenticationsImpl,
  ServerDevOpsAuditSettingsImpl,
  ServerDnsAliasesImpl,
  ServerKeysImpl,
  ServerOperationsImpl,
  ServerSecurityAlertPoliciesImpl,
  ServerTrustGroupsImpl,
  ServerVulnerabilityAssessmentsImpl,
  SqlAgentImpl,
  SubscriptionUsagesImpl,
  SyncAgentsImpl,
  SyncGroupsImpl,
  SyncMembersImpl,
  TdeCertificatesImpl,
  TimeZonesImpl,
  VirtualNetworkRulesImpl,
  WorkloadClassifiersImpl,
  WorkloadGroupsImpl,
  BackupShortTermRetentionPoliciesImpl,
  DatabaseExtensionsOperationsImpl,
  DatabaseOperationsImpl,
  DatabaseUsagesImpl,
  LedgerDigestUploadsOperationsImpl,
  OutboundFirewallRulesImpl,
  UsagesImpl,
  LongTermRetentionBackupsImpl,
  LongTermRetentionManagedInstanceBackupsImpl,
  RestorableDroppedManagedDatabasesImpl,
  ServerConnectionPoliciesImpl,
  DistributedAvailabilityGroupsImpl,
  ServerTrustCertificatesImpl,
  EndpointCertificatesImpl,
  ManagedDatabaseSensitivityLabelsImpl,
  ManagedDatabaseRecommendedSensitivityLabelsImpl,
  SensitivityLabelsImpl,
  RecommendedSensitivityLabelsImpl,
  ServerBlobAuditingPoliciesImpl,
  DatabaseBlobAuditingPoliciesImpl,
  ExtendedDatabaseBlobAuditingPoliciesImpl,
  ExtendedServerBlobAuditingPoliciesImpl,
  DatabaseAdvancedThreatProtectionSettingsImpl,
  ServerAdvancedThreatProtectionSettingsImpl,
  ManagedServerDnsAliasesImpl,
  ManagedDatabaseAdvancedThreatProtectionSettingsImpl,
  ManagedInstanceAdvancedThreatProtectionSettingsImpl,
  ReplicationLinksImpl,
  ManagedDatabaseMoveOperationsImpl,
  ManagedInstanceDtcsImpl,
  SynapseLinkWorkspacesImpl,
  VirtualClustersImpl,
  InstanceFailoverGroupsImpl,
  ManagedDatabaseRestoreDetailsImpl,
  DatabaseEncryptionProtectorsImpl,
  ManagedDatabasesImpl,
  ManagedInstancesImpl,
  ManagedLedgerDigestUploadsOperationsImpl,
  RecoverableDatabasesImpl,
  RestorableDroppedDatabasesImpl,
  ServerConfigurationOptionsImpl,
  ServersImpl,
  StartStopManagedInstanceSchedulesImpl,
  TransparentDataEncryptionsImpl,
  FailoverGroupsImpl,
  IPv6FirewallRulesImpl,
  SqlVulnerabilityAssessmentBaselineImpl,
  SqlVulnerabilityAssessmentBaselinesImpl,
  SqlVulnerabilityAssessmentExecuteScanImpl,
  SqlVulnerabilityAssessmentRuleBaselineImpl,
  SqlVulnerabilityAssessmentRuleBaselinesImpl,
  SqlVulnerabilityAssessmentScanResultImpl,
  SqlVulnerabilityAssessmentScansImpl,
  SqlVulnerabilityAssessmentsSettingsImpl,
  SqlVulnerabilityAssessmentsImpl,
  DatabaseSqlVulnerabilityAssessmentBaselinesImpl,
  DatabaseSqlVulnerabilityAssessmentExecuteScanImpl,
  DatabaseSqlVulnerabilityAssessmentRuleBaselinesImpl,
  DatabaseSqlVulnerabilityAssessmentScanResultImpl,
  DatabaseSqlVulnerabilityAssessmentScansImpl,
  DatabaseSqlVulnerabilityAssessmentsSettingsImpl
} from "./operations";
import {
  DataMaskingPolicies,
  DataMaskingRules,
  GeoBackupPolicies,
  Databases,
  ElasticPools,
  ServerCommunicationLinks,
  ServiceObjectives,
  ElasticPoolActivities,
  ElasticPoolDatabaseActivities,
  ServerUsages,
  DatabaseAdvisors,
  DatabaseAutomaticTuningOperations,
  DatabaseColumns,
  DatabaseRecommendedActions,
  DatabaseSchemas,
  DatabaseSecurityAlertPolicies,
  DatabaseTables,
  DatabaseVulnerabilityAssessmentRuleBaselines,
  DatabaseVulnerabilityAssessments,
  DatabaseVulnerabilityAssessmentScans,
  DataWarehouseUserActivitiesOperations,
  DeletedServers,
  ElasticPoolOperations,
  EncryptionProtectors,
  FirewallRules,
  InstancePools,
  JobAgents,
  JobCredentials,
  JobExecutions,
  Jobs,
  JobStepExecutions,
  JobSteps,
  JobTargetExecutions,
  JobTargetGroups,
  JobVersions,
  Capabilities,
  LongTermRetentionPolicies,
  MaintenanceWindowOptionsOperations,
  MaintenanceWindowsOperations,
  ManagedBackupShortTermRetentionPolicies,
  ManagedDatabaseColumns,
  ManagedDatabaseQueries,
  ManagedDatabaseSchemas,
  ManagedDatabaseSecurityAlertPolicies,
  ManagedDatabaseSecurityEvents,
  ManagedDatabaseTables,
  ManagedDatabaseTransparentDataEncryption,
  ManagedDatabaseVulnerabilityAssessmentRuleBaselines,
  ManagedDatabaseVulnerabilityAssessments,
  ManagedDatabaseVulnerabilityAssessmentScans,
  ManagedInstanceAdministrators,
  ManagedInstanceAzureADOnlyAuthentications,
  ManagedInstanceEncryptionProtectors,
  ManagedInstanceKeys,
  ManagedInstanceLongTermRetentionPolicies,
  ManagedInstanceOperations,
  ManagedInstancePrivateEndpointConnections,
  ManagedInstancePrivateLinkResources,
  ManagedInstanceTdeCertificates,
  ManagedInstanceVulnerabilityAssessments,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies,
  ManagedServerSecurityAlertPolicies,
  Operations,
  PrivateEndpointConnections,
  PrivateLinkResources,
  RecoverableManagedDatabases,
  RestorePoints,
  ServerAdvisors,
  ServerAutomaticTuningOperations,
  ServerAzureADAdministrators,
  ServerAzureADOnlyAuthentications,
  ServerDevOpsAuditSettings,
  ServerDnsAliases,
  ServerKeys,
  ServerOperations,
  ServerSecurityAlertPolicies,
  ServerTrustGroups,
  ServerVulnerabilityAssessments,
  SqlAgent,
  SubscriptionUsages,
  SyncAgents,
  SyncGroups,
  SyncMembers,
  TdeCertificates,
  TimeZones,
  VirtualNetworkRules,
  WorkloadClassifiers,
  WorkloadGroups,
  BackupShortTermRetentionPolicies,
  DatabaseExtensionsOperations,
  DatabaseOperations,
  DatabaseUsages,
  LedgerDigestUploadsOperations,
  OutboundFirewallRules,
  Usages,
  LongTermRetentionBackups,
  LongTermRetentionManagedInstanceBackups,
  RestorableDroppedManagedDatabases,
  ServerConnectionPolicies,
  DistributedAvailabilityGroups,
  ServerTrustCertificates,
  EndpointCertificates,
  ManagedDatabaseSensitivityLabels,
  ManagedDatabaseRecommendedSensitivityLabels,
  SensitivityLabels,
  RecommendedSensitivityLabels,
  ServerBlobAuditingPolicies,
  DatabaseBlobAuditingPolicies,
  ExtendedDatabaseBlobAuditingPolicies,
  ExtendedServerBlobAuditingPolicies,
  DatabaseAdvancedThreatProtectionSettings,
  ServerAdvancedThreatProtectionSettings,
  ManagedServerDnsAliases,
  ManagedDatabaseAdvancedThreatProtectionSettings,
  ManagedInstanceAdvancedThreatProtectionSettings,
  ReplicationLinks,
  ManagedDatabaseMoveOperations,
  ManagedInstanceDtcs,
  SynapseLinkWorkspaces,
  VirtualClusters,
  InstanceFailoverGroups,
  ManagedDatabaseRestoreDetails,
  DatabaseEncryptionProtectors,
  ManagedDatabases,
  ManagedInstances,
  ManagedLedgerDigestUploadsOperations,
  RecoverableDatabases,
  RestorableDroppedDatabases,
  ServerConfigurationOptions,
  Servers,
  StartStopManagedInstanceSchedules,
  TransparentDataEncryptions,
  FailoverGroups,
  IPv6FirewallRules,
  SqlVulnerabilityAssessmentBaseline,
  SqlVulnerabilityAssessmentBaselines,
  SqlVulnerabilityAssessmentExecuteScan,
  SqlVulnerabilityAssessmentRuleBaseline,
  SqlVulnerabilityAssessmentRuleBaselines,
  SqlVulnerabilityAssessmentScanResult,
  SqlVulnerabilityAssessmentScans,
  SqlVulnerabilityAssessmentsSettings,
  SqlVulnerabilityAssessments,
  DatabaseSqlVulnerabilityAssessmentBaselines,
  DatabaseSqlVulnerabilityAssessmentExecuteScan,
  DatabaseSqlVulnerabilityAssessmentRuleBaselines,
  DatabaseSqlVulnerabilityAssessmentScanResult,
  DatabaseSqlVulnerabilityAssessmentScans,
  DatabaseSqlVulnerabilityAssessmentsSettings
} from "./operationsInterfaces";
import { SqlManagementClientOptionalParams } from "./models";

export class SqlManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SqlManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SqlManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-sql/10.1.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.dataMaskingPolicies = new DataMaskingPoliciesImpl(this);
    this.dataMaskingRules = new DataMaskingRulesImpl(this);
    this.geoBackupPolicies = new GeoBackupPoliciesImpl(this);
    this.databases = new DatabasesImpl(this);
    this.elasticPools = new ElasticPoolsImpl(this);
    this.serverCommunicationLinks = new ServerCommunicationLinksImpl(this);
    this.serviceObjectives = new ServiceObjectivesImpl(this);
    this.elasticPoolActivities = new ElasticPoolActivitiesImpl(this);
    this.elasticPoolDatabaseActivities = new ElasticPoolDatabaseActivitiesImpl(
      this
    );
    this.serverUsages = new ServerUsagesImpl(this);
    this.databaseAdvisors = new DatabaseAdvisorsImpl(this);
    this.databaseAutomaticTuningOperations = new DatabaseAutomaticTuningOperationsImpl(
      this
    );
    this.databaseColumns = new DatabaseColumnsImpl(this);
    this.databaseRecommendedActions = new DatabaseRecommendedActionsImpl(this);
    this.databaseSchemas = new DatabaseSchemasImpl(this);
    this.databaseSecurityAlertPolicies = new DatabaseSecurityAlertPoliciesImpl(
      this
    );
    this.databaseTables = new DatabaseTablesImpl(this);
    this.databaseVulnerabilityAssessmentRuleBaselines = new DatabaseVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.databaseVulnerabilityAssessments = new DatabaseVulnerabilityAssessmentsImpl(
      this
    );
    this.databaseVulnerabilityAssessmentScans = new DatabaseVulnerabilityAssessmentScansImpl(
      this
    );
    this.dataWarehouseUserActivitiesOperations = new DataWarehouseUserActivitiesOperationsImpl(
      this
    );
    this.deletedServers = new DeletedServersImpl(this);
    this.elasticPoolOperations = new ElasticPoolOperationsImpl(this);
    this.encryptionProtectors = new EncryptionProtectorsImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.instancePools = new InstancePoolsImpl(this);
    this.jobAgents = new JobAgentsImpl(this);
    this.jobCredentials = new JobCredentialsImpl(this);
    this.jobExecutions = new JobExecutionsImpl(this);
    this.jobs = new JobsImpl(this);
    this.jobStepExecutions = new JobStepExecutionsImpl(this);
    this.jobSteps = new JobStepsImpl(this);
    this.jobTargetExecutions = new JobTargetExecutionsImpl(this);
    this.jobTargetGroups = new JobTargetGroupsImpl(this);
    this.jobVersions = new JobVersionsImpl(this);
    this.capabilities = new CapabilitiesImpl(this);
    this.longTermRetentionPolicies = new LongTermRetentionPoliciesImpl(this);
    this.maintenanceWindowOptionsOperations = new MaintenanceWindowOptionsOperationsImpl(
      this
    );
    this.maintenanceWindowsOperations = new MaintenanceWindowsOperationsImpl(
      this
    );
    this.managedBackupShortTermRetentionPolicies = new ManagedBackupShortTermRetentionPoliciesImpl(
      this
    );
    this.managedDatabaseColumns = new ManagedDatabaseColumnsImpl(this);
    this.managedDatabaseQueries = new ManagedDatabaseQueriesImpl(this);
    this.managedDatabaseSchemas = new ManagedDatabaseSchemasImpl(this);
    this.managedDatabaseSecurityAlertPolicies = new ManagedDatabaseSecurityAlertPoliciesImpl(
      this
    );
    this.managedDatabaseSecurityEvents = new ManagedDatabaseSecurityEventsImpl(
      this
    );
    this.managedDatabaseTables = new ManagedDatabaseTablesImpl(this);
    this.managedDatabaseTransparentDataEncryption = new ManagedDatabaseTransparentDataEncryptionImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessmentRuleBaselines = new ManagedDatabaseVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessments = new ManagedDatabaseVulnerabilityAssessmentsImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessmentScans = new ManagedDatabaseVulnerabilityAssessmentScansImpl(
      this
    );
    this.managedInstanceAdministrators = new ManagedInstanceAdministratorsImpl(
      this
    );
    this.managedInstanceAzureADOnlyAuthentications = new ManagedInstanceAzureADOnlyAuthenticationsImpl(
      this
    );
    this.managedInstanceEncryptionProtectors = new ManagedInstanceEncryptionProtectorsImpl(
      this
    );
    this.managedInstanceKeys = new ManagedInstanceKeysImpl(this);
    this.managedInstanceLongTermRetentionPolicies = new ManagedInstanceLongTermRetentionPoliciesImpl(
      this
    );
    this.managedInstanceOperations = new ManagedInstanceOperationsImpl(this);
    this.managedInstancePrivateEndpointConnections = new ManagedInstancePrivateEndpointConnectionsImpl(
      this
    );
    this.managedInstancePrivateLinkResources = new ManagedInstancePrivateLinkResourcesImpl(
      this
    );
    this.managedInstanceTdeCertificates = new ManagedInstanceTdeCertificatesImpl(
      this
    );
    this.managedInstanceVulnerabilityAssessments = new ManagedInstanceVulnerabilityAssessmentsImpl(
      this
    );
    this.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies = new ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesImpl(
      this
    );
    this.managedServerSecurityAlertPolicies = new ManagedServerSecurityAlertPoliciesImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.recoverableManagedDatabases = new RecoverableManagedDatabasesImpl(
      this
    );
    this.restorePoints = new RestorePointsImpl(this);
    this.serverAdvisors = new ServerAdvisorsImpl(this);
    this.serverAutomaticTuningOperations = new ServerAutomaticTuningOperationsImpl(
      this
    );
    this.serverAzureADAdministrators = new ServerAzureADAdministratorsImpl(
      this
    );
    this.serverAzureADOnlyAuthentications = new ServerAzureADOnlyAuthenticationsImpl(
      this
    );
    this.serverDevOpsAuditSettings = new ServerDevOpsAuditSettingsImpl(this);
    this.serverDnsAliases = new ServerDnsAliasesImpl(this);
    this.serverKeys = new ServerKeysImpl(this);
    this.serverOperations = new ServerOperationsImpl(this);
    this.serverSecurityAlertPolicies = new ServerSecurityAlertPoliciesImpl(
      this
    );
    this.serverTrustGroups = new ServerTrustGroupsImpl(this);
    this.serverVulnerabilityAssessments = new ServerVulnerabilityAssessmentsImpl(
      this
    );
    this.sqlAgent = new SqlAgentImpl(this);
    this.subscriptionUsages = new SubscriptionUsagesImpl(this);
    this.syncAgents = new SyncAgentsImpl(this);
    this.syncGroups = new SyncGroupsImpl(this);
    this.syncMembers = new SyncMembersImpl(this);
    this.tdeCertificates = new TdeCertificatesImpl(this);
    this.timeZones = new TimeZonesImpl(this);
    this.virtualNetworkRules = new VirtualNetworkRulesImpl(this);
    this.workloadClassifiers = new WorkloadClassifiersImpl(this);
    this.workloadGroups = new WorkloadGroupsImpl(this);
    this.backupShortTermRetentionPolicies = new BackupShortTermRetentionPoliciesImpl(
      this
    );
    this.databaseExtensionsOperations = new DatabaseExtensionsOperationsImpl(
      this
    );
    this.databaseOperations = new DatabaseOperationsImpl(this);
    this.databaseUsages = new DatabaseUsagesImpl(this);
    this.ledgerDigestUploadsOperations = new LedgerDigestUploadsOperationsImpl(
      this
    );
    this.outboundFirewallRules = new OutboundFirewallRulesImpl(this);
    this.usages = new UsagesImpl(this);
    this.longTermRetentionBackups = new LongTermRetentionBackupsImpl(this);
    this.longTermRetentionManagedInstanceBackups = new LongTermRetentionManagedInstanceBackupsImpl(
      this
    );
    this.restorableDroppedManagedDatabases = new RestorableDroppedManagedDatabasesImpl(
      this
    );
    this.serverConnectionPolicies = new ServerConnectionPoliciesImpl(this);
    this.distributedAvailabilityGroups = new DistributedAvailabilityGroupsImpl(
      this
    );
    this.serverTrustCertificates = new ServerTrustCertificatesImpl(this);
    this.endpointCertificates = new EndpointCertificatesImpl(this);
    this.managedDatabaseSensitivityLabels = new ManagedDatabaseSensitivityLabelsImpl(
      this
    );
    this.managedDatabaseRecommendedSensitivityLabels = new ManagedDatabaseRecommendedSensitivityLabelsImpl(
      this
    );
    this.sensitivityLabels = new SensitivityLabelsImpl(this);
    this.recommendedSensitivityLabels = new RecommendedSensitivityLabelsImpl(
      this
    );
    this.serverBlobAuditingPolicies = new ServerBlobAuditingPoliciesImpl(this);
    this.databaseBlobAuditingPolicies = new DatabaseBlobAuditingPoliciesImpl(
      this
    );
    this.extendedDatabaseBlobAuditingPolicies = new ExtendedDatabaseBlobAuditingPoliciesImpl(
      this
    );
    this.extendedServerBlobAuditingPolicies = new ExtendedServerBlobAuditingPoliciesImpl(
      this
    );
    this.databaseAdvancedThreatProtectionSettings = new DatabaseAdvancedThreatProtectionSettingsImpl(
      this
    );
    this.serverAdvancedThreatProtectionSettings = new ServerAdvancedThreatProtectionSettingsImpl(
      this
    );
    this.managedServerDnsAliases = new ManagedServerDnsAliasesImpl(this);
    this.managedDatabaseAdvancedThreatProtectionSettings = new ManagedDatabaseAdvancedThreatProtectionSettingsImpl(
      this
    );
    this.managedInstanceAdvancedThreatProtectionSettings = new ManagedInstanceAdvancedThreatProtectionSettingsImpl(
      this
    );
    this.replicationLinks = new ReplicationLinksImpl(this);
    this.managedDatabaseMoveOperations = new ManagedDatabaseMoveOperationsImpl(
      this
    );
    this.managedInstanceDtcs = new ManagedInstanceDtcsImpl(this);
    this.synapseLinkWorkspaces = new SynapseLinkWorkspacesImpl(this);
    this.virtualClusters = new VirtualClustersImpl(this);
    this.instanceFailoverGroups = new InstanceFailoverGroupsImpl(this);
    this.managedDatabaseRestoreDetails = new ManagedDatabaseRestoreDetailsImpl(
      this
    );
    this.databaseEncryptionProtectors = new DatabaseEncryptionProtectorsImpl(
      this
    );
    this.managedDatabases = new ManagedDatabasesImpl(this);
    this.managedInstances = new ManagedInstancesImpl(this);
    this.managedLedgerDigestUploadsOperations = new ManagedLedgerDigestUploadsOperationsImpl(
      this
    );
    this.recoverableDatabases = new RecoverableDatabasesImpl(this);
    this.restorableDroppedDatabases = new RestorableDroppedDatabasesImpl(this);
    this.serverConfigurationOptions = new ServerConfigurationOptionsImpl(this);
    this.servers = new ServersImpl(this);
    this.startStopManagedInstanceSchedules = new StartStopManagedInstanceSchedulesImpl(
      this
    );
    this.transparentDataEncryptions = new TransparentDataEncryptionsImpl(this);
    this.failoverGroups = new FailoverGroupsImpl(this);
    this.iPv6FirewallRules = new IPv6FirewallRulesImpl(this);
    this.sqlVulnerabilityAssessmentBaseline = new SqlVulnerabilityAssessmentBaselineImpl(
      this
    );
    this.sqlVulnerabilityAssessmentBaselines = new SqlVulnerabilityAssessmentBaselinesImpl(
      this
    );
    this.sqlVulnerabilityAssessmentExecuteScan = new SqlVulnerabilityAssessmentExecuteScanImpl(
      this
    );
    this.sqlVulnerabilityAssessmentRuleBaseline = new SqlVulnerabilityAssessmentRuleBaselineImpl(
      this
    );
    this.sqlVulnerabilityAssessmentRuleBaselines = new SqlVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.sqlVulnerabilityAssessmentScanResult = new SqlVulnerabilityAssessmentScanResultImpl(
      this
    );
    this.sqlVulnerabilityAssessmentScans = new SqlVulnerabilityAssessmentScansImpl(
      this
    );
    this.sqlVulnerabilityAssessmentsSettings = new SqlVulnerabilityAssessmentsSettingsImpl(
      this
    );
    this.sqlVulnerabilityAssessments = new SqlVulnerabilityAssessmentsImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentBaselines = new DatabaseSqlVulnerabilityAssessmentBaselinesImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentExecuteScan = new DatabaseSqlVulnerabilityAssessmentExecuteScanImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentRuleBaselines = new DatabaseSqlVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentScanResult = new DatabaseSqlVulnerabilityAssessmentScanResultImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentScans = new DatabaseSqlVulnerabilityAssessmentScansImpl(
      this
    );
    this.databaseSqlVulnerabilityAssessmentsSettings = new DatabaseSqlVulnerabilityAssessmentsSettingsImpl(
      this
    );
  }

  dataMaskingPolicies: DataMaskingPolicies;
  dataMaskingRules: DataMaskingRules;
  geoBackupPolicies: GeoBackupPolicies;
  databases: Databases;
  elasticPools: ElasticPools;
  serverCommunicationLinks: ServerCommunicationLinks;
  serviceObjectives: ServiceObjectives;
  elasticPoolActivities: ElasticPoolActivities;
  elasticPoolDatabaseActivities: ElasticPoolDatabaseActivities;
  serverUsages: ServerUsages;
  databaseAdvisors: DatabaseAdvisors;
  databaseAutomaticTuningOperations: DatabaseAutomaticTuningOperations;
  databaseColumns: DatabaseColumns;
  databaseRecommendedActions: DatabaseRecommendedActions;
  databaseSchemas: DatabaseSchemas;
  databaseSecurityAlertPolicies: DatabaseSecurityAlertPolicies;
  databaseTables: DatabaseTables;
  databaseVulnerabilityAssessmentRuleBaselines: DatabaseVulnerabilityAssessmentRuleBaselines;
  databaseVulnerabilityAssessments: DatabaseVulnerabilityAssessments;
  databaseVulnerabilityAssessmentScans: DatabaseVulnerabilityAssessmentScans;
  dataWarehouseUserActivitiesOperations: DataWarehouseUserActivitiesOperations;
  deletedServers: DeletedServers;
  elasticPoolOperations: ElasticPoolOperations;
  encryptionProtectors: EncryptionProtectors;
  firewallRules: FirewallRules;
  instancePools: InstancePools;
  jobAgents: JobAgents;
  jobCredentials: JobCredentials;
  jobExecutions: JobExecutions;
  jobs: Jobs;
  jobStepExecutions: JobStepExecutions;
  jobSteps: JobSteps;
  jobTargetExecutions: JobTargetExecutions;
  jobTargetGroups: JobTargetGroups;
  jobVersions: JobVersions;
  capabilities: Capabilities;
  longTermRetentionPolicies: LongTermRetentionPolicies;
  maintenanceWindowOptionsOperations: MaintenanceWindowOptionsOperations;
  maintenanceWindowsOperations: MaintenanceWindowsOperations;
  managedBackupShortTermRetentionPolicies: ManagedBackupShortTermRetentionPolicies;
  managedDatabaseColumns: ManagedDatabaseColumns;
  managedDatabaseQueries: ManagedDatabaseQueries;
  managedDatabaseSchemas: ManagedDatabaseSchemas;
  managedDatabaseSecurityAlertPolicies: ManagedDatabaseSecurityAlertPolicies;
  managedDatabaseSecurityEvents: ManagedDatabaseSecurityEvents;
  managedDatabaseTables: ManagedDatabaseTables;
  managedDatabaseTransparentDataEncryption: ManagedDatabaseTransparentDataEncryption;
  managedDatabaseVulnerabilityAssessmentRuleBaselines: ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
  managedDatabaseVulnerabilityAssessments: ManagedDatabaseVulnerabilityAssessments;
  managedDatabaseVulnerabilityAssessmentScans: ManagedDatabaseVulnerabilityAssessmentScans;
  managedInstanceAdministrators: ManagedInstanceAdministrators;
  managedInstanceAzureADOnlyAuthentications: ManagedInstanceAzureADOnlyAuthentications;
  managedInstanceEncryptionProtectors: ManagedInstanceEncryptionProtectors;
  managedInstanceKeys: ManagedInstanceKeys;
  managedInstanceLongTermRetentionPolicies: ManagedInstanceLongTermRetentionPolicies;
  managedInstanceOperations: ManagedInstanceOperations;
  managedInstancePrivateEndpointConnections: ManagedInstancePrivateEndpointConnections;
  managedInstancePrivateLinkResources: ManagedInstancePrivateLinkResources;
  managedInstanceTdeCertificates: ManagedInstanceTdeCertificates;
  managedInstanceVulnerabilityAssessments: ManagedInstanceVulnerabilityAssessments;
  managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies;
  managedServerSecurityAlertPolicies: ManagedServerSecurityAlertPolicies;
  operations: Operations;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  recoverableManagedDatabases: RecoverableManagedDatabases;
  restorePoints: RestorePoints;
  serverAdvisors: ServerAdvisors;
  serverAutomaticTuningOperations: ServerAutomaticTuningOperations;
  serverAzureADAdministrators: ServerAzureADAdministrators;
  serverAzureADOnlyAuthentications: ServerAzureADOnlyAuthentications;
  serverDevOpsAuditSettings: ServerDevOpsAuditSettings;
  serverDnsAliases: ServerDnsAliases;
  serverKeys: ServerKeys;
  serverOperations: ServerOperations;
  serverSecurityAlertPolicies: ServerSecurityAlertPolicies;
  serverTrustGroups: ServerTrustGroups;
  serverVulnerabilityAssessments: ServerVulnerabilityAssessments;
  sqlAgent: SqlAgent;
  subscriptionUsages: SubscriptionUsages;
  syncAgents: SyncAgents;
  syncGroups: SyncGroups;
  syncMembers: SyncMembers;
  tdeCertificates: TdeCertificates;
  timeZones: TimeZones;
  virtualNetworkRules: VirtualNetworkRules;
  workloadClassifiers: WorkloadClassifiers;
  workloadGroups: WorkloadGroups;
  backupShortTermRetentionPolicies: BackupShortTermRetentionPolicies;
  databaseExtensionsOperations: DatabaseExtensionsOperations;
  databaseOperations: DatabaseOperations;
  databaseUsages: DatabaseUsages;
  ledgerDigestUploadsOperations: LedgerDigestUploadsOperations;
  outboundFirewallRules: OutboundFirewallRules;
  usages: Usages;
  longTermRetentionBackups: LongTermRetentionBackups;
  longTermRetentionManagedInstanceBackups: LongTermRetentionManagedInstanceBackups;
  restorableDroppedManagedDatabases: RestorableDroppedManagedDatabases;
  serverConnectionPolicies: ServerConnectionPolicies;
  distributedAvailabilityGroups: DistributedAvailabilityGroups;
  serverTrustCertificates: ServerTrustCertificates;
  endpointCertificates: EndpointCertificates;
  managedDatabaseSensitivityLabels: ManagedDatabaseSensitivityLabels;
  managedDatabaseRecommendedSensitivityLabels: ManagedDatabaseRecommendedSensitivityLabels;
  sensitivityLabels: SensitivityLabels;
  recommendedSensitivityLabels: RecommendedSensitivityLabels;
  serverBlobAuditingPolicies: ServerBlobAuditingPolicies;
  databaseBlobAuditingPolicies: DatabaseBlobAuditingPolicies;
  extendedDatabaseBlobAuditingPolicies: ExtendedDatabaseBlobAuditingPolicies;
  extendedServerBlobAuditingPolicies: ExtendedServerBlobAuditingPolicies;
  databaseAdvancedThreatProtectionSettings: DatabaseAdvancedThreatProtectionSettings;
  serverAdvancedThreatProtectionSettings: ServerAdvancedThreatProtectionSettings;
  managedServerDnsAliases: ManagedServerDnsAliases;
  managedDatabaseAdvancedThreatProtectionSettings: ManagedDatabaseAdvancedThreatProtectionSettings;
  managedInstanceAdvancedThreatProtectionSettings: ManagedInstanceAdvancedThreatProtectionSettings;
  replicationLinks: ReplicationLinks;
  managedDatabaseMoveOperations: ManagedDatabaseMoveOperations;
  managedInstanceDtcs: ManagedInstanceDtcs;
  synapseLinkWorkspaces: SynapseLinkWorkspaces;
  virtualClusters: VirtualClusters;
  instanceFailoverGroups: InstanceFailoverGroups;
  managedDatabaseRestoreDetails: ManagedDatabaseRestoreDetails;
  databaseEncryptionProtectors: DatabaseEncryptionProtectors;
  managedDatabases: ManagedDatabases;
  managedInstances: ManagedInstances;
  managedLedgerDigestUploadsOperations: ManagedLedgerDigestUploadsOperations;
  recoverableDatabases: RecoverableDatabases;
  restorableDroppedDatabases: RestorableDroppedDatabases;
  serverConfigurationOptions: ServerConfigurationOptions;
  servers: Servers;
  startStopManagedInstanceSchedules: StartStopManagedInstanceSchedules;
  transparentDataEncryptions: TransparentDataEncryptions;
  failoverGroups: FailoverGroups;
  iPv6FirewallRules: IPv6FirewallRules;
  sqlVulnerabilityAssessmentBaseline: SqlVulnerabilityAssessmentBaseline;
  sqlVulnerabilityAssessmentBaselines: SqlVulnerabilityAssessmentBaselines;
  sqlVulnerabilityAssessmentExecuteScan: SqlVulnerabilityAssessmentExecuteScan;
  sqlVulnerabilityAssessmentRuleBaseline: SqlVulnerabilityAssessmentRuleBaseline;
  sqlVulnerabilityAssessmentRuleBaselines: SqlVulnerabilityAssessmentRuleBaselines;
  sqlVulnerabilityAssessmentScanResult: SqlVulnerabilityAssessmentScanResult;
  sqlVulnerabilityAssessmentScans: SqlVulnerabilityAssessmentScans;
  sqlVulnerabilityAssessmentsSettings: SqlVulnerabilityAssessmentsSettings;
  sqlVulnerabilityAssessments: SqlVulnerabilityAssessments;
  databaseSqlVulnerabilityAssessmentBaselines: DatabaseSqlVulnerabilityAssessmentBaselines;
  databaseSqlVulnerabilityAssessmentExecuteScan: DatabaseSqlVulnerabilityAssessmentExecuteScan;
  databaseSqlVulnerabilityAssessmentRuleBaselines: DatabaseSqlVulnerabilityAssessmentRuleBaselines;
  databaseSqlVulnerabilityAssessmentScanResult: DatabaseSqlVulnerabilityAssessmentScanResult;
  databaseSqlVulnerabilityAssessmentScans: DatabaseSqlVulnerabilityAssessmentScans;
  databaseSqlVulnerabilityAssessmentsSettings: DatabaseSqlVulnerabilityAssessmentsSettings;
}
