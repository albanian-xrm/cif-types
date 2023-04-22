declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Returns the entity metadata for the specified entity.
     * @returns An object containing the entity metadata information with the following form {@link EntityMetadata}.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/getentitymetadata External Link: getEntityMetadata}
     */
    export function getEntityMetadata(
      entityName: string,
      attributes?: string[]
    ): Promise<EntityMetadata>;

    export interface EntityMetadata {
      /**
       * Whether a custom activity should appear in the activity menus in the Web application.
       * - `0` indicates that the custom activity doesn't appear
       * - `1` indicates that it does appear.
       */
      ActivityTypeMask: 0 | 1;

      /**
       * Indicates whether to automatically move records to the owner’s default queue when a record of this type is created or assigned.
       */
      AutoRouteToOwnerQueue: boolean;

      /**
       * @warning For internal use only.
       */
      CanEnableSyncToExternalSearchIndex: boolean;

      /**
       * Indicates whether the entity can trigger a workflow process.
       */
      CanTriggerWorkflow: boolean;

      /**
       * Description for the entity.
       */
      Description: string;

      /**
       * Plural display name for the entity.
       */
      DisplayCollectionName: string;

      /**
       * Display name for the entity.
       */
      DisplayName: string;

      /**
       * Indicates whether the entity will enforce custom state transitions.
       */
      EnforceStateTransitions: boolean;

      /**
       * The hexadecimal code to represent the color to be used for this entity in the application.
       */
      EntityColor: string;

      /**
       * The name of the Web API entity set for this entity.
       */
      EntitySetName: string;

      /**
       * Indicates whether activities are associated with this entity.
       */
      HasActivities: boolean;

      /**
       * Indicates whether the entity is an activity.
       */
      IsActivity: boolean;

      /**
       * Indicates whether the email messages can be sent to an email address stored in a record of this type.
       */
      IsActivityParty: boolean;

      /**
       * Indicates whether the entity is enabled for business process flows.
       */
      IsBusinessProcessEnabled: boolean;

      /**
       * Indicates whether the entity is a business process flow entity.
       */
      IsBPFEntity: boolean;

      /**
       * Indicates whether the entity is a child entity.
       */
      IsChildEntity: boolean;

      /**
       * Indicates whether connections are enabled for this entity.
       */
      IsConnectionsEnabled: boolean;

      /**
       * Indicates whether the entity is a custom entity.
       */
      IsCustomEntity: boolean;

      /**
       * Indicates whether the entity is customizable.
       */
      IsCustomizable: boolean;

      /**
       * Indicates whether document management is enabled.
       */
      IsDocumentManagementEnabled: boolean;

      /**
       * Indicates whether the document recommendations are enabled.
       */
      IsDocumentRecommendationsEnabled: boolean;

      /**
       * Indicates whether duplicate detection is enabled.
       */
      IsDuplicateDetectionEnabled: boolean;

      /**
       * Indicates whether charts are enabled.
       */
      IsEnabledForCharts: boolean;

      /**
       * Indicates whether the entity can be imported using the Import Wizard.
       */
      IsImportable: boolean;

      /**
       * Indicates the entity is enabled for interactive experience.
       */
      IsInteractionCentricEnabled: boolean;

      /**
       * Indicates whether knowledge management is enabled for the entity.
       */
      IsKnowledgeManagementEnabled: boolean;

      /**
       * Indicates whether mail merge is enabled for this entity.
       */
      IsMailMergeEnabled: boolean;

      /**
       * Indicates whether the entity is part of a managed solution.
       */
      IsManaged: boolean;

      /**
       * Indicates whether OneNote integration is enabled for the entity.
       */
      IsOneNoteIntegrationEnabled: boolean;

      /**
       * Indicates whether optimistic concurrency is enabled for the entity.
       */
      IsOptimisticConcurrencyEnabled: boolean;

      /**
       * Indicates whether the entity is enabled for quick create forms.
       */
      IsQuickCreateEnabled: boolean;

      /**
       * Indicates whether the entity supports setting custom state transitions.
       */
      IsStateModelAware: boolean;

      /**
       * Indicates whether the entity is shown in Advanced Find.
       */
      IsValidForAdvancedFind: boolean;

      /**
       * Indicates whether Microsoft Dynamics 365 for tablets users can see data for this entity.
       */
      IsVisibleInMobileClient: boolean;

      /**
       * Indicates whether the entity is enabled for Unified Interface.
       */
      IsEnabledInUnifiedInterface: boolean;

      /**
       * The logical collection name.
       */
      LogicalCollectionName: string;

      /**
       * The logical name for the entity.
       */
      LogicalName: string;

      /**
       * The entity type code.
       */
      ObjectTypeCode: number;

      /**
       * The ownership type for the entity: `UserOwned` or `OrganizationOwned`.
       */
      OwnershipType: "UserOwned" | "OrganizationOwned";

      /**
       * The name of the attribute that is the primary ID for the entity.
       */
      PrimaryIdAttribute: string;

      /**
       * The name of the primary image attribute for an entity.
       */
      PrimaryImageAttribute: string;

      /**
       * The name of the primary attribute for an entity.
       */
      PrimaryNameAttribute: string;

      /**
       * The privilege metadata for the entity where each object contains the following attributes to define the security privilege for access to an entity
       */
      Privileges: EntityPrivilege[];

      /**
       * A collection of attribute metadata objects. The object returned depends on the type of attribute metadata.
       */
      Attributes: (
        | Attributes.BaseAttribute
        | Attributes.BooleanAttribute
        | Attributes.EnumAttribute
        | Attributes.PicklistAttribute
        | Attributes.StateAttribute
        | Attributes.StatusAttribute
      )[];
    }

    namespace Attributes {
      export interface BaseAttribute {
        /**
         * Type of an attribute. For a list of attribute type values, see {@link AttributeTypeCode}
         */
        AttributeType: AttributeTypeCode;

        /**
         *  Display name for the attribute.
         */
        DisplayName: string;

        /**
         *  Logical name of the entity that contains the attribute.
         */
        EntityLogicalName: string;

        /**
         * Logical name for the attribute.
         */
        LogicalName: string;
      }

      export interface BooleanAttribute extends BaseAttribute {
        /**
         *  Default value for a Boolean option set.
         */
        DefaultFormValue: boolean;

        /**
         * Options for the boolean attribute where each option is a key:value pair.
         */
        OptionSet: { [key in 0 | 1]: string };
      }

      export interface EnumAttribute extends BaseAttribute {
        /**
         * Options for the attribute where each option is a key:value pair.
         */
        OptionSet: { [key: number]: string };
      }

      export interface PicklistAttribute extends BaseAttribute {
        /**
         * Default form value for the attribute.
         */
        DefaultFormValue: number;

        /**
         * Options for the attribute where each option is a key:value pair.
         */
        OptionSet: { [key: number]: string };
      }

      export interface StateAttribute extends BaseAttribute {
        /**
         * Options for the attribute where each option is a key:value pair.
         */
        OptionSet: { [key: number]: string };

        /**
         * @param arg state value
         * @returns default status (number) based on the passed in state value for an entity
         * @remarks For default state and status values for an entity, see entity metadata information of the entity in {@link External Link: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/about-entity-reference entity reference}.
         */
        getDefaultStatus(arg: number): number;

        /**
         * @param arg state value
         * @returns possible status values (array of numbers) for a specified state value
         * @remarks For state and status values for an entity, see entity metadata information of the entity in {@link External Link: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/about-entity-reference entity reference}.
         */
        getStatusValuesForState(arg: number): number[];
      }

      export interface StatusAttribute extends BaseAttribute {
        /**
         * Options for the attribute where each option is a key:value pair.
         */
        OptionSet: { [key: number]: string };

        /**
         * @param arg status value
         * @returns the state value (number) for the specified status value (number).
         * @remarks For default state and status values for an entity, see entity metadata information of the entity in {@link External Link: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/about-entity-reference entity reference}.
         */
        getState(arg: number): number;
      }

      /**
       * Describes the type of an attribute.
       * @see {@link https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.attributetypecode External Link: Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode}
       */
      export const enum AttributeTypeCode {
        /**
         * A big integer attribute.
         */
        BigInt = 18,
        /**
         * A Boolean attribute.
         */
        Boolean = 0,
        /**
         * An attribute that contains calendar rules.
         */
        CalendarRules = 16,

        /**
         * 	An attribute that represents a customer.
         */
        Customer = 1,
        /**
         * A date/time attribute.
         */
        DateTime = 2,

        /**
         * A decimal attribute.
         */
        Decimal = 3,

        /**
         * A double attribute.
         */
        Double = 4,

        /**
         * An entity name attribute.
         */
        EntityName = 20,

        /**
         * An integer attribute.
         */
        Integer = 5,

        /**
         * A lookup attribute.
         */
        Lookup = 6,

        /**
         * A managed property attribute.
         */
        ManagedProperty = 19,

        /**
         * A memo attribute.
         */
        Memo = 7,

        /**
         * A money attribute.
         */
        Money = 8,

        /**
         * An owner attribute.
         */
        Owner = 9,

        /**
         * A partylist attribute.
         */
        PartyList = 10,

        /**
         * A picklist attribute.
         */
        Picklist = 11,

        /**
         * A state attribute.
         */
        State = 12,

        /**
         * A status attribute.
         */
        Status = 13,

        /**
         * A string attribute.
         */
        String = 14,

        /**
         * An attribute that is an ID.
         */
        Uniqueidentifier = 15,

        /**
         * An attribute that is created by the system at run time.
         */
        Virtual = 17,
      }
    }

    export interface EntityPrivilege {
      /**
       * Whether the privilege can be basic access level.
       */
      CanBeBasic: boolean;

      /**
       * Whether the privilege can be deep access level.
       */
      CanBeDeep: boolean;

      /**
       * Whether the privilege for an external party can be basic access level.
       */
      CanBeEntityReference: boolean;

      /**
       * Whether the privilege can be global access level.
       */
      CanBeGlobal: boolean;

      /**
       * Whether the privilege can be local access level.
       */
      CanBeLocal: boolean;

      /**
       * Whether the privilege for an external party can be parent access level.
       */
      CanBeParentEntityReference: boolean;

      /**
       * The name of the privilege.
       */
      Name: string;

      /**
       * The ID of the privilege.
       */
      PrivilegeId: string;

      /**
       * The type of privilege, which is one of the following: {@link EntityPrivilegeType}
       */
      PrivilegeType: EntityPrivilegeType;
    }

    export const enum EntityPrivilegeType {
      None = 0,
      Create = 1,
      Read = 2,
      Write = 3,
      Delete = 4,
      Assign = 5,
      Share = 6,
      Append = 7,
      AppendTo = 8,
    }
  }
}
