declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Invoke this method to log analytics for custom events.
     * @param data Key-value pairs representing the analytics data to be logged.
     * @param eventName Name of the event to be logged.
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Promise with value as string
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/channel-integration-framework/v2/develop/reference/microsoft-ciframework/loganalyticsevent External Link: logAnalyticsEvent}
     */
    export function logAnalyticsEvent(data: AnalyticsData, eventName:string, correlationId?: string): Promise<string>;

    interface AnalyticsData {
      /**
       * Conversation identifier
       */
      conversationId?: string;
      /**
       * Channel Integration Framework Provider Id
       */
      providerSessionId?: string;
      /**
       * Client session identifier
       */
      clientSessionId?: string;
      /**
       * Participant identifier
       */
      participantId?: string;
      events?: AnalyticsEventData[];
    }

    interface AnalyticsEventData{
      /**
       * Name of the associated KPI event
       */
      kpiEventName?: string;
      /**
       * Reason due to which the KPI event was created
       */
      kpiEventReason?: string;
      /**
       * Timestamp at which the event occurred
       */
      eventTimestamp?: string;
      /**
       * Additional data related to the session
       */
      additionalData?: string;
      /**
       * Agent notification response action value
       */
      notificationResponseAction?: string;
      /**
       * External system correlation Id
       */
      externalCorrelationId?: string;
      /**
       * Custom data
       */
      customData?: {attribute: string; value: string}[];
    }
  }
}
