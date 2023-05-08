declare namespace Microsoft {
  namespace CIFramework {
    /**
     * This method allows you to update a Conversation(msdyn_ocliveworkitem) record.
     * @param id Unique identifier of the conversation returned by {@link Microsoft.CIFramework.getSession Microsoft.CIFramework.getSession} API.
     * @param data JSON string
     * @param correlationId Used to group all related API calls together for diagnostic telemetry
     * @returns Returns a promise with string value.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework/updateconversation External Link: updateConversation}
     * @example
     * var data = {
     *      "subject": "Troubleshooting printer malfunction",
     *      "prioritycode": 2
     *  }
     *  var conversationId = "05145e77-ce40-ea11-a812-000d3a579805";
     *  var jsonData = JSON.stringify(data);
     *  Microsoft.CIFramework.updateConversation(conversationId, jsonData).then(
     *      function success (response) {
     *          var result = JSON.parse(response);
     *          console.log("Conversation updated with ID: " + result.id);
     *          //the Conversation is updated
     *        },
     *        function (error) {
     *            console.log(error);
     *            //handle errors
     *        }
     *    );
     */
    export function updateConversation(
      id: string,
      data: string,
      correlationId?: string
    ): Promise<string>;
  }
}
