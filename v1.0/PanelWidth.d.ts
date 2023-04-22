declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Gets the panel width in pixels.
     * @returns Returns a promise object containing the width of the panel, in pixels.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/getwidth External Link: getWidth}
     */
    export function getWidth(): Promise<number>;

    /**
     * Sets the panel width for all the sessions.
     * @param value The width of the panel in pixels.
     * @remarks
     * - If the value parameter passed for setWidth is greater than half of screen width, the side panel will collapse.
     * - The width should be greater than or equal to 300. The API doesn't consider any value less than 300.
     * @returns Returns a promise object with a value.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/setwidth External Link: setWidth}
     */
    export function setWidth(value: number): Promise<void>;
  }
}
