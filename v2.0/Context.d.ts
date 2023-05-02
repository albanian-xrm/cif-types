declare namespace Microsoft {
  namespace CIFramework {
    /**
     * This method allows you to set automation dictionary. It enables providers to add, modify and remove values of slugs and the updated values are subsequently available for future macro invocations.
     * @param input JSON string
     * @param sessionId Unique identifier of the current session.
     * @param isDelete Set isDelete to `true` if the list of parameters in input JSON are to be deleted. If isDelete is set to `true`, the slug values will be deleted and will no longer be available for subsequent macro invocations.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Returns a promise with string value.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/updatecontext External Link: updateContext}
     * @example
     * var input = { "customerName" : "Contosso" };
     * Microsoft.CIFramework.updateContext(input).then(
     *     function success(result) {
     *         console.log(result);
     *         // Perform operations upon record retrieval and opening
     *     },
     *     function (error) {
     *         console.log(error.message);
     *         // Handle error conditions
     *     }
     * );
     */
    export function updateContext(
      input: string,
      sessionId: string,
      isDelete?: boolean,
      correlationId?: string
    ): Promise<string>;
  }
}
