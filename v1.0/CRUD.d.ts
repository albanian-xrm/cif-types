declare namespace Microsoft {
  namespace CIFramework {
    /**
     * Creates an entity record.
     * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
     * @param data String defining the attributes and values for the new entity record.
     * @returns On success, returns a promise containing a string with the attributes and their values.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/createrecord External Link: createRecord}
     * @example
     * var entityLogicalName = "contact";
     * var data = {
     *    "firstname": "Sample",
     *    "lastname": "Contact",
     *    "fullname": "Sample Contact",
     *    "emailaddress1": "contact@contoso.com",
     *    "jobtitle": "Sr. Marketing Manager",
     *    "telephone1": "555-0109",
     *    "description": "Default values for this record were set programmatically."
     * }
     * // create contact record
     * var jsonData = JSON.stringify(data);
     * Microsoft.CIFramework.createRecord(entityLogicalName,jsonData).then(
     *     function success (result) {
     *       res=JSON.parse(result);
     *           console.log("Contact created with ID: " + res.id);
     *           //perform operations on record creation
     *       },
     *       function (error) {
     *           console.log(error);
     *           //handle error conditions
     *       }
     *   );
     */
    export function createRecord(
      entityLogicalName: string,
      data: string
    ): Promise<string>;

    /**
     * Retrieves an entity record.
     * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
     * @param id GUID of the entity record you want to retrieve.
     * @param options OData system query options, `$select` and `$expand`, to retrieve your data.
     *   * Use the `$select` system query option to limit the properties returned by including a comma-separated list of property names. This is an important performance best practice. If properties aren’t specified using `$select`, all properties will be returned.
     *   * Use the `$expand` system query option to control what data from related entities is returned. If you just include the name of the navigation property, you’ll receive all the properties for related records. You can limit the properties returned for related records using the `$select` system query option in parentheses after the navigation property name. Use this for both single-valued and collection-valued navigation properties.
     *
     *    You specify the query options starting with `?`. You can also specify multiple query options by using `&` to separate the query options. For example:
     *    ```text
     *    ?$select=name&$expand=primarycontactid($select=contactid,fullname)
     *    ```
     * @returns On success, returns a promise containing a string with the retrieved attributes and their values.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/retrieverecord External Link: retrieveRecord}
     * @example
     * // retrieve contact record
     * var id = "b44d31ac-5fd1-e811-8158-000d3af97055";
     * var entityLogicalName = "contact";
     * Microsoft.CIFramework.retrieveRecord(entityLogicalName, id, "?$select=fullname,telephone1").then(
     *     function success(result) {
     *       res=JSON.parse(result);
     *         console.log(`Retrieved values: Full Name: ${res.fullname}, Telephone Number: ${res.telephone1}`);
     *         // perform operations on record retrieval
     *     },
     *     function (error) {
     *         console.log(error.message);
     *         // handle error conditions
     *     }
     * );
     */
    export function retrieveRecord(
      entityLogicalName: string,
      id: string,
      options?: string
    ): Promise<string>;

    /**
     * Updates an entity record.
     * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
     * @param id GUID of the entity record you want to update.
     * @param data String containing key: value pairs, where key is the property of the entity and value is the value of the property you want to update.
     * @returns On success, returns a promise containing a string with the updated attributes and their values.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/updaterecord External Link: deleteRecord}
     * @example
     * //// define the data to update a record
     * var entityLogicalName = "contact";
     * var data = {
     *     "firstname": "Updated Sample",
     *     "lastname": "Contact",
     *     "fullname": "Updated Sample Contact",
     *     "emailaddress1": "contact@contoso.com",
     *     "jobtitle": "Sr. Marketing Manager",
     *     "telephone1": "555-0109",
     *     "description": "Updated values for this record were set programmatically."
     * }
     * // update contact record
     * var id = "b44d31ac-5fd1-e811-8158-000d3af97055";
     * var jsonData = JSON.stringify(data);
     * Microsoft.CIFramework.updateRecord(entityLogicalName,id,jsonData).then(
     *     function success (result) {
     *       res=JSON.parse(result);
     *           console.log("Contact updated with ID: " + res.id);
     *           //the record is updated
     *       },
     *       function (error) {
     *           console.log(error);
     *           //handle error conditions
     *       }
     *   );
     */
    export function updateRecord(
      entityLogicalName: string,
      id: string,
      data: string
    ): Promise<string>;

    /**
     * Deletes an entity record.
     * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
     * @param id GUID of the entity record you want to delete.
     * @returns On success, returns a promise containing a string with the attributes and their values.
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/deleterecord External Link: deleteRecord}
     * @example
     * // delete contact record  with the id=b44d31ac-5fd1-e811-8158-000d3af97055d
     * var id = "b44d31ac-5fd1-e811-8158-000d3af97055";
     * var entityLogicalName = "contact";
     * Microsoft.CIFramework.deleteRecord(entityLogicalName, id).then(
     *     function success(result) {
     *       res=JSON.parse(result);
     *       console.log("Contact deleted with ID: " + res.contactid);
     *       // the record is deleted
     *     },
     *     function (error) {
     *         console.log(error.message);
     *         // handle error conditions
     *     }
     * );
     */
    export function deleteRecord(
      entityLogicalName: string,
      id: string
    ): Promise<string>;
  }
}
