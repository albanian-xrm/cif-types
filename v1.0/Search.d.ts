declare namespace Microsoft {
  namespace CIFramework {
    /**
     * The method searches for the record from the communication widget during the inbound communication and opens the record.
     * @param entityLogicalName Name of the entity to search and open.
     * @param queryParameters OData system query options, `$select` and `$expand`, to retrieve your data.
     *   * Use the `$select` system query option to limit the properties returned by including a comma-separated list of property names. This is an important performance best practice. If properties aren’t specified using `$select`, all properties will be returned.
     *   * Use the `$expand` system query option to control what data from related entities is returned. If you just include the name of the navigation property, you’ll receive all the properties for related records. You can limit the properties returned for related records using the `$select` system query option in parentheses after the navigation property name. Use this for both single-valued and collection-valued navigation properties.
     *
     *    You specify the query options starting with `?`. You can also specify multiple query options by using `&` to separate the query options. For example:
     *    ```text
     *    ?$select=name&$expand=primarycontactid($select=contactid,fullname)
     *    ```
     * @param searchOnly Set the searchOnly to false when you want the search to display a single record based on the search context.
     *    If the search result has multiple records and if you've used queryParameters to indicate the search option, then setting
     *    searchOnly to false opens and populates the search page with the search option.
     *    `Note:` If the search result has multiple records, then records for `Account`, `Contact`, and `Activity` entities only are opened.
     * @param correlationId Is used to group all related API calls together for diagnostic telemetry. GUID.
     * @param searchType Type of search page to open. `0` for relevance search and `1` for categorized search. If no parameter is provided, the records are searched by category.
     * @returns Returns a Promise object of type String. On success, the method returns the search results as per the search query.
     * @remarks You can fetch a maximum of 5000 records at once (if more than 5000 records exist). You can narrow down the results by using query options such as `$filter`, `$select`, and `$top` in the method parameters. See {@link https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview External Link: Query options overview}
     * @remarks To search based on relevance, you must configure relevance search. If relevance search isn't enabled, then the search will be performed based on category. See {@link https://learn.microsoft.com/en-us/power-platform/admin/configure-relevance-search-organization External Link: Configure Relevance Seach}
     * @see {@link https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/reference/microsoft-ciframework/searchandopenrecords External Link: searchAndOpenRecords}
     * @example
     * // retrieve contact record
     * Microsoft.CIFramework.searchAndOpenRecords("contact", "?$select=fullname,telephone1", false).
     * then(
     *     function success(result) {
     *     res=JSON.parse(result);
     *         console.log(`Record values: Full Name: ${res[0].fullname}, Telephone Number: ${res[0].telephone1}`);
     *         // perform operations on record retrieval and opening
     *     },
     *     function (error) {
     *         console.log(error.message);
     *         // handle error conditions
     *     }
     * );
     *
     * @example
     * // Retrieve Contact entity record
     * // Change searchOnly parameter to true, if you do not want to open the search results page
     * Microsoft.CIFramework.searchAndOpenRecords("contact", "?$select=fullname,telephone1&$filter=firstname eq 'Contoso'&$search=Contoso", false).
     * then(
     *     function success(result) {
     *     res=JSON.parse(result);
     *         console.log(`The caller name is: ${res[0].fullname}, Telephone Number: ${res[0].telephone1}`);
     *         // perform operations on record retrieval and opening
     *     },
     *     function (error) {
     *         console.log(error.message);
     *         // handle error conditions
     *     }
     * );
     */
    export function searchAndOpenRecords(
      entityLogicalName: string,
      queryParameters: string,
      searchOnly: boolean,
      correlationId?: string,
      searchType?: SearchType
    ): Promise<string>;

    /**
     * Allows you to search among the records of a particular entity type. This API opens the Unified Interface entity page with the search field on it prepopulated with the search string that is passed as a parameter.
     * @param entityLogicalName The entity logical name of the record you want to query such as "account".
     * @param searchString String to search among the attributes of the entity records.
     * @param Type of search page to open. `0` for relevance search and `1` for categorized search. If no parameter is provided, the records are searched by category.  For information on relevance search, see {@link https://learn.microsoft.com/en-us/power-platform/admin/configure-relevance-search-organization External Link: Configure Dataverse search}.
     */
    export function renderSearchPage(
      entityLogicalName: string,
      searchString: string,
      searchType?: SearchType
    ): Promise<void>;

    export const enum SearchType {
      RelevanceSearch = 0,
      CategorizedSearch = 1,
    }
  }
}
