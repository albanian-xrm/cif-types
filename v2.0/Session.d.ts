declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Returns an object containing the unique identifier of the session, unique identifier of the conversation, context and the value of isFocused parameter, in case the session belongs to the channel provider.
     * @param sessionId Id of the current session.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Object containing session Id, conversation Id, context and isFocused parameter
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/updateconversation External Link: updateConversation}
     * @example
     * Microsoft.CIFramework.getSession("session-id-1").then(
     *      function success(result) {
     *          console.log(result);
     *          // perform operations on session info
     *      },
     *      function (error) {
     *          console.log(error.message);
     *          // handle error conditions
     *      }
     *  );
     */
    export function getSession(
      sessionId: string,
      correlationId?: string
    ): Promise<string>;
  }
}
