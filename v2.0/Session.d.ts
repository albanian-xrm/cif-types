declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Allows you to check if a new session can be created.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/cancreatesession External Link: canCreateSession}
     */
    export function canCreateSession(correlationId?: string): Promise<boolean>;

    /**
     * Creates a new session based on the session template name and returns the unique identifier of the session that was created.
     *
     * If your organization uses single or multiple channel providers, then you can use this method to start a default session. More information: {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/support-multiple-providers External Link: Configure support for single and multiple channel providers}
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/cancreatesession External Link: canCreateSession}
     * @example
     * var input = {
     *   // unique name of the configured template
     *   templateName: "msdyn_chat_session",
     *   templateParameters: {
     *     customer: "Contoso",
     *   } // Global and application tab template parameters, these values will override configured values
     * };
     * Microsoft.CIFramework.createSession(input).then(function success(sessionId) {
     *   console.log(sessionId);
     *   // perform operations on session Id retrieved
     * }, function(error) {
     *   console.log(error.message);
     *   // handle error conditions
     * });
     */
    export function createSession(
      input: CreateSessionInput,
      correlationId?: string
    ): Promise<boolean>;

    /**
     * Input for {@link Microsoft.CIFramework.createSession createSession}
     */
    interface CreateSessionInput {
      /**
       * Unique name of session template
       */
      templateName: string;
      /**
       * Global and application tab template parameters, these values will override configured values
       */
      templateParameters: {
        [key: string]: number | boolean | string;       
      };
    }

    /**
     * Returns an array of session identifiers for a provider.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with the value as array of strings.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/getallsessions External Link: getAllSessions}
     */
    export function getAllSessions(correlationId?: string): Promise<string[]>;

    /**
     * Returns an object containing the unique identifier of the session, unique identifier of the conversation, context and the value of isFocused parameter, in case the session belongs to the channel provider.
     * @param sessionId Id of the current session.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Object containing session Id, conversation Id, context and isFocused parameter
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/getsession External Link: getSession}
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
