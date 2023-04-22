declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Adds the subscriber to the events.
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set. The supported events are as follows:
     *   * onClickToAct - The event is invoked when the outbound communication (ClickToAct) field is enabled.
     *   * onModeChanged - The event is invoked when the panel mode is manually toggled between Minimized (0) and Docked (1).
     *   * onSizeChanged - The event is invoked when the panel size is manually changed by dragging.
     *   * onPageNavigate - The event is triggered before a navigation event occurs on the main page.
     *   * onSendKBArticle - The event is invoked when the user selects the Send button on the KB control.
     *
     *   You can also pass custom events in the `eventName` parameter.
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     * @example
     * handlerFunction = function(eventData) {
     * console.log(eventData)
     * return Promise.resolve();
     * }
     *
     * Microsoft.CIFramework.addHandler("onmodechanged", handlerFunction);
     */
    export function addHandler(
      eventName: string,
      handlerFunction: (...args) => Promise<void>
    ): Promise<boolean>;

    /**
     * Adds the subscriber to the events. The event is invoked when the panel mode is manually toggled between Minimized (0) and Docked (1).
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set. The event is invoked when the outbound communication (ClickToAct) field is enabled.
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     */
    export function addHandler(
      eventName: "onclicktoact",
      handlerFunction: (eventData: EventArgs.ClickToAct) => Promise<void>
    ): Promise<boolean>;

    /**
     * Adds the subscriber to the events. The event is invoked when the panel mode is manually toggled between Minimized (0) and Docked (1).
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set. The 'OnModeChanged' event is invoked when the panel mode is manually toggled between Minimized (0) and Docked (1).
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     * @example
     * handlerFunction = function(eventData) {
     * console.log(eventData)
     * return Promise.resolve();
     * }
     *
     * Microsoft.CIFramework.addHandler("onmodechanged", handlerFunction);
     */
    export function addHandler(
      eventName: "onmodechanged",
      handlerFunction: (eventData: EventArgs.ModeChanged) => Promise<void>
    ): Promise<boolean>;

    /**
     * Adds the subscriber to the events. The event is triggered before a navigation event occurs on the main page.
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set.
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     */
    export function addHandler(
      eventName: "onpagenavigate",
      handlerFunction: (eventData: EventArgs.PageNavigate) => Promise<void>
    ): Promise<boolean>;

    /**
     * Adds the subscriber to the events. The event is invoked when the user selects the Send button on the KB control.
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set.
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     */
    export function addHandler(
      eventName: "onsendkbarticle",
      handlerFunction: (eventData: EventArgs.SendKBArticle) => Promise<void>
    ): Promise<boolean>;

    /**
     * Adds the subscriber to the events. The event is invoked when the panel size is manually changed by dragging.
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set.
     * @param handlerFunction The handler function is invoked when any of the supported events are triggered.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     */
    export function addHandler(
      eventName: "onsizechanged",
      handlerFunction: (eventData: EventArgs.SizeChanged) => Promise<void>
    ): Promise<boolean>;

    /**
     * Invokes the associated subscriber for the event.
     * @param eventName Name of the event whose handler needs to be invoked.
     * @param eventInputParameters The input parameters that need to be passed to the handler function.
     * @param correlationId Is used to group all related API calls together for diagnostic telemetry.
     * @remark If you've created custom events using the {@link addHandler} method, then you can raise those events by passing the event name as parameter in this method.
     * @returns Promise with a value as Boolean.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     * @example
     * // Let there be an event registered to a subscriber.
     * handlerFunction = function(eventInput)
     * {
     *     console.log(eventInput);
     *     if(eventInput != null &&  eventInput != undefined && eventInput.size > 0)
     *     {
     *         inputData = eventInput.get("value");
     *         correlationId = eventInput.get("correlationId");
     *         console.log(inputData + " " + correlationId);
     *     }
     *     return Promise.resolve();
     * }
     * Microsoft.CIFramework.addHandler("oncustomevent", handlerFunction);
     * //Use raiseEvent API to invoke the subscribed handler of the event.
     * Microsoft.CIFramework.raiseEvent("oncustomevent", "test input value");
     *
     * //In the main UCI page
     * Microsoft.CIFramework.addHandler("widgetEvent", handlerFunction);
     * ///In the widget code
     * Microsoft.CIFramework.raiseEvent("widgetEvent", eventInput);
     *
     * //In the widget code
     * Microsoft.CIFramework.addHandler("mainPageEvent", handlerFunction);
     * //In the main UCI page
     * Microsoft.CIFramework.raiseEvent("mainPageEvent", eventInput);
     */
    export function raiseEvent(
      eventName: string,
      eventInputParameters: string,
      correlationId?: string
    ): Promise<boolean>;

    /**
     * Removes the subscriber from the events.
     * @remark This API can be used on both the widget and Unified Interface page.
     * @param eventName Name of the event for which the handler is set. The supported events are as follows:
     *   * onClickToAct - The event is invoked when the outbound communication (ClickToAct) field is enabled.
     *   * onModeChanged - The event is invoked when the panel mode is manually toggled between Minimized (0) and Docked (1).
     *   * onSizeChanged - The event is invoked when the panel size is manually changed by dragging.
     *   * onPageNavigate - The event is triggered before a navigation event occurs on the main page.
     *   * onSendKBArticle - The event is invoked when the user selects the Send button on the KB control.
     *
     *   You can also pass custom events in the `eventName` parameter.
     * @param handlerFunction The handler function that is to removed.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/raiseevent External Link: raiseEvent}
     */
    export function removeHandler(
      eventName: string,
      handlerFunction: (eventData: EventArgs.SizeChanged) => Promise<void>
    ): void;

    namespace EventArgs {
      /**
       * The CIFInitDone event is raised by the Dynamics 365 Channel Integration Framework library when Channel Integration Framework is loaded.
       * This event is used to determine whether the Channel Integration Framework APIs are ready to be consumed.
       * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/events/cifinitdone External Link: CIFInitDone event}
       * @example
       * (function () {
       *     window.addEventListener("CIFInitDone", function () {
       *         //Code that consumes CIF library APIs.
       *     });
       * })();
       */
      export interface CIFInitDone {}

      export interface ClickToAct {
        value: any;
        name: "string";
        format: "string";
        entityLogicalName: "string";
      }

      export interface ModeChanged {
        value: PanelMode;
      }

      /**
       * The onpagenavigate event is invoked when the main Unified Interface page navigation occurs. The eventData URL is the navigated Unified Interface page URL.
       */
      export interface PageNavigate {
        /**
         * url
         */
        value: string;
      }

      export interface SendKBArticle {
        /**
         * KB article title
         */
        title: string;
        /**
         * url
         */
        link: string;
      }

      export interface SizeChanged {
        value: number;
      }
    }
  }
}
