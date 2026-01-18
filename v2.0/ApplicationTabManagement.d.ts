declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Creates a tab in a focused session and returns the unique identifier of the created tab.
     * @param input JSON input
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns None.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/closetab External Link: closeTab}
     */
    export function closeTab(input: TabInput,correlationId?: string): Promise<void>;

    /**
     * Creates a tab in a focused session and returns the unique identifier of the created tab.
     * @param input JSON input
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value of tab ID as String.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/createtab External Link: createTab}
     */
    export function createTab(input: TabInput,correlationId?: string): Promise<string>;

    /**
     * Sets the focus on a tab, if:
     * - The focused session belongs to the provider or if it is either the home or default session.
     * - The tab belongs to the session in focus.
     * @param tabId Unique identifier of the tab
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with no value.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/focustab External Link: focusTab}
     */
    export function focusTab(tabId: string, correlationId?: string): Promise<void>;

    /**
     * Returns the focused tab's identifier in a focused session, if the session belongs to the channel provider.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value as String
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/getfocusedtab External Link: getFocusedTab}
     */
    export function getFocusedTab(correlationId?: string): Promise<string>;

    /**
     * Returns an array of tab Ids associated with template name or template tags for tabs in the session in focus, if the session belongs to the channel provider.
     * @param tabtemplatename Unique Name of the application tab template
     * @param tags Tags associated with the application tab
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value of tab ID as String.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/gettabs External Link: getTabs}
     */
    export function getTabs(tabtemplatename?: string, tags?:string, correlationId?: string): Promise<string[]>;

    /**
     * Refreshes the tab.
     * @param tabId Unique identifier of the tab
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with no value.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/refreshtab External Link: refreshTab}
     */
    export function refreshTab(tabId: string, correlationId?: string): Promise<void>;

    /**
     * Refreshes the tab.
     * @param tabId Unique identifier of the tab
     * @param title JSON containing the title of the tab.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns none.
     * @remarks Use this API only when the focused session belongs to the provider or if it is the home or default session.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/settabtitle External Link: setTabTitle}
     */
    export function setTabTitle(tabId: string, title: TabTitle, correlationId?: string): Promise<void>;

    export type TabInput = {
      /**
       * Unique name of the tab 
       */
      templateName: string;

      /**
       * Additional context for tab creation and tab slugs
       */
      templateParameters?: { [key: string]: string;};

      /**
       * Should this tab be focused after the creation
       */
      isFocused?: boolean;
    };

    export type TabTitle = {
        title: string;
    }
  }
}
