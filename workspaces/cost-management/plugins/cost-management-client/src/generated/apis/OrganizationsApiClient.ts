//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { DiscoveryApi } from '../types/discovery';
import { FetchApi } from '../types/fetch';
import crossFetch from 'cross-fetch';
import {pluginId} from '../pluginId';
import * as parser from 'uri-template';

import { OrganizationFilter } from '../models/OrganizationFilter.model';
import { OrganizationPagination } from '../models/OrganizationPagination.model';

/**
 * Wraps the Response type to convey a type on the json call.
 *
 * @public
 */
export type TypedResponse<T> = Omit<Response, 'json'> & {
  json: () => Promise<T>;
};


/**
 * Options you can pass into a request for additional information.
 *
 * @public
 */
export interface RequestOptions {
  token?: string;
}

/**
 * no description
 */
export class OrganizationsApiClient {
    private readonly discoveryApi: DiscoveryApi;
    private readonly fetchApi: FetchApi;

    constructor(options: {
        discoveryApi: { getBaseUrl(pluginId: string): Promise<string> };
        fetchApi?: { fetch: typeof fetch };
    }) {
        this.discoveryApi = options.discoveryApi;
        this.fetchApi = options.fetchApi || { fetch: crossFetch };
    }

    /**
     * View AWS organizations
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param orgUnitId String to indicate org unit id
     */
    public async organizationsAwsGet(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                offset?: number,
                limit?: number,
                orgUnitId?: OrganizationFilter,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<OrganizationPagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/organizations/aws/{?filter,offset,limit,org_unit_id}`;

        const uri = parser.parse(uriTemplate).expand({
            ...request.query,
        })

        return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
            },
            method: 'GET',
            
        });
    }

}

export type OrganizationsApi = InstanceType<typeof OrganizationsApiClient>;
