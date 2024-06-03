//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { DiscoveryApi } from '../types/discovery';
import { FetchApi } from '../types/fetch';
import crossFetch from 'cross-fetch';
import {pluginId} from '../pluginId';
import * as parser from 'uri-template';

import { ResourceTypeAwsCategories } from '../models/ResourceTypeAwsCategories.model';
import { ResourceTypeListPagination } from '../models/ResourceTypeListPagination.model';
import { ResourceTypePagination } from '../models/ResourceTypePagination.model';

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
export class ResourceTypeApiClient {
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
     * List Resource Types For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourceTypes(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypeListPagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/{?offset,limit,value,ordering}`;

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

    /**
     * List AWS Accounts For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAwsAccounts(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/aws-accounts/{?offset,limit,value,ordering}`;

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

    /**
     * Obtain mapping of key and values for AWS Categories.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param key Parameter for matching on a key using a contains.
     * @param value Parameter for matching the value data using a contains.
     * @param account Parameter for matching the account data using a contains.
     * @param keyOnly Flag to indicate whether or not only the tag key values will be returned.
     */
    public async listResourcesAwsCategories(
        // @ts-ignore
        request: {
            query: {
                limit?: number,
                key?: string,
                value?: string,
                account?: string,
                keyOnly?: boolean,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypeAwsCategories >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/aws-categories/{?limit,key,value,account,key_only}`;

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

    /**
     * List AWS Organizational Units For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAwsOrgUnits(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/aws-organizational-units/{?offset,limit,value,ordering}`;

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

    /**
     * List AWS Regions For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAwsRegions(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/aws-regions/{?offset,limit,value,ordering}`;

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

    /**
     * List AWS Services For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAwsServices(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/aws-services/{?offset,limit,value,ordering}`;

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

    /**
     * List Azure Regions For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAzureRegions(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/azure-regions/{?offset,limit,value,ordering}`;

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

    /**
     * List Azure Services For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAzureServices(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/azure-services/{?offset,limit,value,ordering}`;

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

    /**
     * List Azure Subscription Guids For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesAzureSubGuids(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/azure-subscription-guids/{?offset,limit,value,ordering}`;

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

    /**
     * List Cost Models For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesCostModels(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/cost-models/{?offset,limit,value,ordering}`;

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

    /**
     * List GCP Accounts For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesGcpAccounts(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/gcp-accounts/{?offset,limit,value,ordering}`;

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

    /**
     * List GCP Projects For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesGcpProjects(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/gcp-projects/{?offset,limit,value,ordering}`;

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

    /**
     * List GCP Regions For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesGcpRegions(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/gcp-regions/{?offset,limit,value,ordering}`;

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

    /**
     * List GCP Services For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesGcpServices(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/gcp-services/{?offset,limit,value,ordering}`;

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

    /**
     * List OCI Regions For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOciRegions(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/oci-regions/{?offset,limit,value,ordering}`;

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

    /**
     * List OCI Services For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOciServices(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/oci-services/{?offset,limit,value,ordering}`;

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

    /**
     * List OCI Subscription Guids For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOciTenantids(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/oci-payer-tenant-ids/{?offset,limit,value,ordering}`;

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

    /**
     * List OpenShift Clusters For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOpenShiftClusters(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/openshift-clusters/{?offset,limit,value,ordering}`;

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

    /**
     * List OpenShift Nodes For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOpenShiftNodes(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/openshift-nodes/{?offset,limit,value,ordering}`;

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

    /**
     * List OpenShift Projects For RBAC
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned.
     * @param value Parameter for matching the value data using a contains.
     * @param ordering Parameter for ordering the value data.
     */
    public async listResourcesOpenShiftProjects(
        // @ts-ignore
        request: {
            query: {
                offset?: number,
                limit?: number,
                value?: string,
                ordering?: 'value' | '-value',
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ResourceTypePagination >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/resource-types/openshift-projects/{?offset,limit,value,ordering}`;

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

export type ResourceTypeApi = InstanceType<typeof ResourceTypeApiClient>;
