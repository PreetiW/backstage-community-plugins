//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { ForecastData } from '../models/ForecastData.model';
import { PaginationLinks } from '../models/PaginationLinks.model';
import { PaginationMeta } from '../models/PaginationMeta.model';



export interface Forecast {


    'meta'?: PaginationMeta;
    'links'?: PaginationLinks;
    'data': Array<ForecastData>;
}

