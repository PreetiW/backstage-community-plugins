//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { PaginationLinks } from '../models/PaginationLinks.model';
import { ReportOpenShiftAzureFilter } from '../models/ReportOpenShiftAzureFilter.model';
import { ReportOpenShiftAzureGrouping } from '../models/ReportOpenShiftAzureGrouping.model';
import { ReportOpenShiftAzureOrdering } from '../models/ReportOpenShiftAzureOrdering.model';
import { ReportPaginationMeta } from '../models/ReportPaginationMeta.model';



export interface ReportOpenShiftAzureStorageInventory {


    'meta'?: ReportPaginationMeta;
    'links'?: PaginationLinks;
    'groupBy'?: ReportOpenShiftAzureGrouping;
    'orderBy'?: ReportOpenShiftAzureOrdering;
    'filter'?: ReportOpenShiftAzureFilter;
    'data': Array<any>;
}


