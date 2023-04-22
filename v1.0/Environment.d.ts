declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Gets the current Unified Interface app and page details.
     * @returns Returns a Promise object of type String with details of the current Unified Interface app and page. See {@link Environment}
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/getenvironment External Link: getEnvironment}
     */
    export function getEnvironment(): Promise<string>;

    export interface Environment {
      /**
       * Application ID
       */
      appid: string;
      /**
       * Page type
       */
      pagetype: string;
      /**
       * Record ID
       */
      id: string;
    }
  }
}
