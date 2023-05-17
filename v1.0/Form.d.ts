declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Opens an entity form or a quick create form.
     * @param entityFormOptions Entity form options for opening the form. This parameter is a serialized from {@link Microsoft.CIFramework.EntityFormOptions EntityFormOptions}
     * @param formParameters A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error. For information about passing parameters to a form, see {@link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/set-field-values-using-parameters-passed-form External Link: Set field values using parameters passed to a form} and {@link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/configure-form-accept-custom-querystring-parameters External Link:  Configure a form to accept custom querystring parameters}
     * @returns On success, returns a Promise object containing string.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/openform External Link: openForm}
     * @example
     * var id = "5af02e2a-d0d1-e811-8158-000d3af97055"
     * var title = "Sample Case Form"
     * var entityFormOptions = {};
     *     entityFormOptions["entityName"] = "incident";
     *
     * var formParameters = {};
     *     //pre-populate some fields based on the context
     *     formParameters["title"] = title;
     *     formParameters["customerid"] = id;
     *     formParameters["customeridtype"] = "contact";
     *     formParameters["caseorigincode"] = 1;
     *     formParameters["description"] = "Opened the form with pre-populated details like title, contact id, and description.";
     *
     * //Open the form
     * Microsoft.CIFramework.openForm(JSON.stringify(entityFormOptions), JSON.stringify(formParameters)).then(
     *       function (success) {
     *         console.log(success);
     *     },
     *     function (error) {
     *         console.log(error);
     *     }
     *   );
     */
    export function openForm(
      entityFormOptions: string,
      formParameters?: string
    ): Promise<string>;

    export interface EntityFormOptions {
      /**
       * Indicates whether to display the command bar. If you do not specify this parameter, the command bar is displayed by default.
       */
      cmdBar?: boolean;

      /**
       * Indicates a record that will provide default values based on mapped attribute values.
       */
      createFromEntity?: LookupValue;

      /**
       * String	Identifier of the entity record to display the form for.
       */
      entityId?: string;

      /**
       * Logical name of the entity to display the form for.
       */
      entityName: string;

      /**
       * Identifier of the form instance to be displayed.
       */
      formId?: string;

      /**
       * Height of the form window to be displayed in pixels.
       */
      height?: number;

      /**
       * Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the site map.
       */
      navBar?: EntityFormNavBar;

      /**
       * Indicates whether to display the form in a new window.
       */
      openInNewWindow?: boolean;

      /**
       * Indicates the position of the form on the window.
       */
      windowPosition?: WindowPosition;

      /**
       * Identifier of the business process to be displayed on the form.
       */
      processId?: string;

      /**
       * Identifier of the business process instance to be displayed on the form.
       */
      processInstanceId?: string;

      /**
       * Indicates a relationship object to display the related records on the form.
       */
      relationship?: Relationship;

      /**
       * Identifier of the selected stage in business process instance.
       */
      selectStageId?: string;

      useQuickCreateForm?: boolean;

      /**
       * Width of the form window to be displayed in pixels.
       */
      width?: number;
    }

    /**
     * The following interface describes the attributes of the {@link Microsoft.CIFramework.EntityFormOptions.relationship relationship} object attribute of the {@link Microsoft.CIFramework.openForm entityFormOptions} parameter.
     */
    export interface Relationship {
      /**
       * Name of the attribute used for relationship.
       */
      attributeName?: string;

      /**
       * Name of the relationship.
       */
      name?: string;

      /**
       * Name of the navigation property for the relationship.
       */
      navigationProperty?: string;

      /**
       * Relationship type.
       */
      relationshipType?: RelationshipType;

      /**
       * Role type in the relationship.
       */
      roleType?: RoleType;
    }

    export const enum EntityFormNavBar {
      /**
       * The navigation bar is displayed. This is the default behavior if the navBar parameter is not used.
       */
      on = "on",
      /**
       * The navigation bar is not displayed. The user can navigate using other user interface elements or the back and forward buttons.
       */
      off = "off",
      /**
       * On an entity form, only the navigation options for related entities are available. After navigating to a related entity, a back button is displayed on the navigation bar to allow returning to the original record.
       */
      entity = "entity",
    }

    export const enum WindowPosition {
      Center = 1,
      Side = 2,
    }

    export const enum RelationshipType {
      OneToMany = 0,
      ManyToMany = 1,
    }

    export const enum RoleType {
      Referencing = 1,
      AssociationEntity = 2,
    }

    export interface LookupValue {
      entityType: string;
      id: string;
      name?: string;
    }
  }
}
