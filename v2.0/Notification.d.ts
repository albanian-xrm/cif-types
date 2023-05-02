declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Cancels the notification about incoming conversations based on the cancellation token.
     * @param cancellationToken Unique string that was provided in the {@link notifyEvent} method to display notifications about incoming conversations.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry.
     * @returns Returns the cancellation token.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/cancelevent External Link: cancelEvent}
     * @example
     * // Trying to cancel a notification, use the same cancelToken passed during creation of notification in notifyEvent
     * Microsoft.CIFramework.cancelEvent(CancelToken).then(
     *     function success(result) {
     *                     console.log(result);
     *                     // Perform operations
     *     },
     *     function (error) {
     *                     console.log(error.message);
     *                     // Handle error conditions
     *     }
     * );
     */
    export function cancelEvent(
      cancellationToken: string,
      correlationId?: string
    ): Promise<string>;

    /**
     * Displays a notification that can be used to inform the agent about incoming conversations.
     * @param input JSON string
     * @param correlationId Used to group all related API calls together for diagnostic telemetry.
     * @param cancellationToken Is the unique string that's used by the {@link cancelEvent} method to cancel notifications about incoming conversations.
     * @returns Returns a Boolean value of success.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/notifyevent External Link: notifyEvent}
     * @example
     * var canceltoken = "cancellationtoken"+ Math.ceil(Math.random() * 100000 + 100000).toString();
     *
     * var input = {
     *      templateName: "msdyn_chat_incoming_unauthenticated", // unique name of the configured template
     *      templateParameters: {},
     *      cancellationToken: canceltoken // unique random token, to identify the notification during cancelEvent call
     * }
     * Microsoft.CIFramework.notifyEvent(input).then(
     *      function success(result) {
     *          console.log(result);
     *          // Perform operations
     *      },
     *      function (error) {
     *          console.log(error.message);
     *          // Handle error conditions
     *      }
     * );
     */
    export function notifyEvent(
      input: NotifyEventArgs,
      correlationId?: string
    ): Promise<string>;

    export interface NotifyEventArgs {
      eventType?: string;
      templateName: string;
      templateParameters: object;
      templateNameResolver?: string;
      additionalParametersObject?: string;
      messageNotificationType?: string;
      notificationAction?: string;
      cancellationToken?: string;
      notificationUXObject?: string;
    }
  }
}
