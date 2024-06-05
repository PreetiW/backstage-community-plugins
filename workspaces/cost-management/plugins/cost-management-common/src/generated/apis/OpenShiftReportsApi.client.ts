//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { DiscoveryApi } from '../types/discovery';
import { FetchApi } from '../types/fetch';
import crossFetch from 'cross-fetch';
import {pluginId} from '../pluginId';
import * as parser from 'uri-template';

import { ReportCost } from '../models/ReportCost.model';
import { ReportCosts } from '../models/ReportCosts.model';
import { ReportOpenShiftAWSInstanceInventory } from '../models/ReportOpenShiftAWSInstanceInventory.model';
import { ReportOpenShiftAWSStorageInventory } from '../models/ReportOpenShiftAWSStorageInventory.model';
import { ReportOpenShiftAllInstanceInventory } from '../models/ReportOpenShiftAllInstanceInventory.model';
import { ReportOpenShiftAllStorageInventory } from '../models/ReportOpenShiftAllStorageInventory.model';
import { ReportOpenShiftAzureInstanceInventory } from '../models/ReportOpenShiftAzureInstanceInventory.model';
import { ReportOpenShiftAzureStorageInventory } from '../models/ReportOpenShiftAzureStorageInventory.model';
import { ReportOpenShiftCpu } from '../models/ReportOpenShiftCpu.model';
import { ReportOpenShiftMemory } from '../models/ReportOpenShiftMemory.model';
import { ReportOpenShiftVolume } from '../models/ReportOpenShiftVolume.model';

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
export class OpenShiftReportsApiClient {
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
     * Query to obtain OpenShift on AWS cost reports
     * @param delta Toggle to include delta values in report.
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAWSCostReports(
        // @ts-ignore
        request: {
            query: {
                delta?: string,
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportCosts >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/aws/costs/{?delta,filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on AWS instance data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAWSInventoryInstanceReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAWSInstanceInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/aws/instance-types/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on AWS storage data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAWSInventoryStorageReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAWSStorageInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/aws/storage/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on all infrastructures cost reports
     * @param delta Toggle to include delta values in report.
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAllCostReports(
        // @ts-ignore
        request: {
            query: {
                delta?: string,
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportCosts >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/all/costs/{?delta,filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on all infrastructures instance data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAllInventoryInstanceReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAllInstanceInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/all/instance-types/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on all infrastructures storage data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAllInventoryStorageReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAllStorageInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/all/storage/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on Azure cost reports
     * @param delta Toggle to include delta values in report.
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAzureCostReports(
        // @ts-ignore
        request: {
            query: {
                delta?: string,
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportCosts >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/azure/costs/{?delta,filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on Azure instance data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAzureInventoryInstanceReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAzureInstanceInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/azure/instance-types/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on Azure storage data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftAzureInventoryStorageReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAzureStorageInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/azure/storage/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift compute usage information
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftComputeReports(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftCpu >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/compute/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain cost reports
     * @param delta Toggle to include delta values in report.
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftCostReports(
        // @ts-ignore
        request: {
            query: {
                delta?: string,
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportCost >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/costs/{?delta,filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on GCP cost reports
     * @param delta Toggle to include delta values in report.
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftGCPCostReports(
        // @ts-ignore
        request: {
            query: {
                delta?: string,
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportCosts >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/gcp/costs/{?delta,filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on GCP instance data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftGCPInventoryInstanceReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAWSInstanceInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/gcp/instance-types/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift on GCP storage data
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftGCPInventoryStorageReport(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftAWSStorageInventory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/infrastructures/gcp/storage/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift memory usage information
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftMemoryReports(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftMemory >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/memory/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
     * Query to obtain OpenShift volume usage information
     * @param filter The filter to apply to the report as a URL encoded dictionary.
     * @param groupBy The grouping to apply to the report as a URL encoded dictionary. The syntax is group_by[parameter]&#x3D;value except for tags, which use group_by[tag:key]&#x3D;value.
     * @param orderBy The ordering to apply to the report as a URL encoded dictionary. The syntax is order_by[field]&#x3D;order. Use &#39;asc&#39; for ascending and &#39;desc&#39; for descending.
     * @param offset Parameter for selecting the offset of data.
     * @param limit Parameter for selecting the amount of data in a returned. Limit of 0 will return all data.
     * @param startDate String to indicate start date of date range.
     * @param endDate String to indicate end date of date range.
     */
    public async getOpenShiftVolumeReports(
        // @ts-ignore
        request: {
            query: {
                filter?: any,
                groupBy?: any,
                orderBy?: any,
                offset?: number,
                limit?: number,
                startDate?: string,
                endDate?: string,
            },
        },
        options?: RequestOptions
    ): Promise<TypedResponse<ReportOpenShiftVolume >> {
        const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

        const uriTemplate = `/reports/openshift/volumes/{?filter,group_by,order_by,offset,limit,start_date,end_date}`;

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
export type OpenShiftReportsApi = InstanceType<typeof OpenShiftReportsApiClient>;