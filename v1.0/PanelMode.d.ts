declare namespace Microsoft {
  namespace CIFramework {
    /**
     * The value to set the mode of the panel.
     */
    export const enum PanelMode {
      /**
       * Enter 0 to minimize the panel.
       */
      Minimized = 0,
      /**
       * Enter 1 to dock the panel.
       */
      Docked = 1,
    }

    /**
     * Gets the current state of the panel.
     * @returns Promise object with the value (current state of the panel). Values are defined in {@link PanelMode}
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/getmode External Link: getMode}
     */
    export function getMode(): Promise<PanelMode>;

    /**
     * Sets the state of the panel.
     * @param value The value to set the mode of the panel.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/setmode External Link: setMode}
     */
    export function setMode(value: PanelMode): Promise<void>;
  }
}
