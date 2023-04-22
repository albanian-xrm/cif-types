declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Returns a Boolean value to indicate whether the outbound communication (ClickToAct) is enabled or not.
     * @returns Returns Promise object with the value. `true` if ClickToAct is enabled; `false` otherwise.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/getclicktoact External Link: getClickToAct}
     */
    export function getClickToAct(): Promise<boolean>;

    /**
     * Sets a Boolean value to enable or disable the outbound communication (ClickToAct).
     * @param value Sets the value to enable or disable ClickToAct.
     * @returns Returns Promise object without value.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/setclicktoact External Link: setClickToAct}
     */
    export function setClickToAct(value: boolean): Promise<boolean>;
  }
}
