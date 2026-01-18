declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Returns the presence text of the agent in the client session.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the presence text of the current agent, as String.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/getpresence External Link: getPresence}
     * @example
     * function getPresence() {
     *     return new Promise((resolve, reject) => {
     *         Microsoft.CIFramework.getPresence().then(
     *             function (result) {
     *                 if (result == "FAILED")
     *                     //your code handling for failure
     *                 else {
     *                     //your code for success
     *                 }
     *                 return result;
     *             },
     *             function (error) {
     *                 // code handling for promise failure
     *             });
     *     });
     */
    export function getPresence(correlationId?: string): Promise<string>;

    /**
     * Sets the presence text of the agent in the client session.
     * @param presenceText Presence text for current agent in Omnichannel for Customer Service. For the presence to be set correctly, the string should exactly match the text used in the admin app. To create custom presence, see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/presence-custom-presence External Link: Configure and manage custom presence} .
     * @param correlationId Used to group all related API calls together for diagnostic telemetry 
     * @returns Returns a Boolean value of success.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/setpresence External Link: setPresence}
     * @example
     * Microsoft.CIFramework.setPresence(custompresence).then(
     *   function (result) {
     *       if(!result)
     *       //code handling when OC Presence is in error
     *       else
     *       //code handling for success
     *   },
     *   function (error) {
     *       reject(error);
     *   });
     *
     */
    export function setPresence(presenceText: string, correlationId?: string): Promise<boolean>;
  }
}
