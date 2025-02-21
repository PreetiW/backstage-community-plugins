/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  coreServices,
  createServiceFactory,
  createServiceRef,
} from '@backstage/backend-plugin-api';
import type { OptimizationsApi } from '@backstage-community/plugin-redhat-resource-optimization-common/clients';
import {
  DefaultApiClient,
  RequestOptions,
  TypedResponse,
} from '@backstage-community/plugin-redhat-resource-optimization-common/DefaultApiClient';
import {
  RecommendationBoxPlots,
  RecommendationList,
} from '@backstage-community/plugin-redhat-resource-optimization-common';
import { deepMapKeys } from '@backstage-community/plugin-redhat-resource-optimization-common/json-utils';

// const DEFAULT_OPTIMIZATIONS_BASE_URL = 'https://console.redhat.com/api/cost-management/v1';

// class OptimizationsApiImpl implements OptimizationsApi {
//     private readonly defaultClient: DefaultApiClient;
//     // private token?: string;

//     constructor(options: { defaultClient: DefaultApiClient }) {
//         this.defaultClient = options.defaultClient;
//     }

//     public getRecommendationById(request: { path: { recommendationId: string; }; query: { memoryUnit?: "bytes" | "MiB" | "GiB"; cpuUnit?: "millicores" | "cores"; }; }, options?: RequestOptions): Promise<TypedResponse<RecommendationBoxPlots>> {
//         throw new Error("Method not implemented.");
//     }
//     public getRecommendationList(request: { query: { cluster?: Array<string>; workloadType?: Array<string>; workload?: Array<string>; container?: Array<string>; project?: Array<string>; startDate?: string; endDate?: string; offset?: number; limit?: number; orderBy?: "cluster" | "project" | "workload_type" | "workload" | "container" | "last_reported"; orderHow?: "asc" | "desc"; }; }, options?: RequestOptions): Promise<TypedResponse<RecommendationList>> {
//         const snakeCaseTransformedRequest = deepMapKeys(
//             request,
//             snakeCase as (value: string | number) => string,
//           ) as GetRecommendationListRequest;

//           const response = await this.defaultClient.getRecommendationList(snakeCaseTransformedRequest, { token: options?.token });

//           return {
//             ...response,
//             json: async () => {
//               const data = await response.json();
//               const camelCaseTransformedResponse = deepMapKeys(
//                 data,
//                 camelCase as (value: string | number) => string,
//               ) as RecommendationList;
//               return camelCaseTransformedResponse;
//             },
//           };
//     }

// }

// export const optimizationServiceRef = createServiceRef<OptimizationsApi>({
//     id: 'optimization-client',
//     defaultFactory: async service =>
//         createServiceFactory({
//             service,
//             deps: {
//                 discoveryApi: coreServices.discovery, // TODO(jkilzi): remove if unnecessary
//                 configApi: coreServices.rootConfig,
//                 fetchApi: coreServices.
//             },
//             async factory({ discoveryApi, configApi }) {
//                 // create a custom object to override the base URL
//                 const defaultClient =  new DefaultApiClient({
//                     discoveryApi: {
//                         async getBaseUrl() {
//                             const baseUrl = configApi.getOptionalString('optimizationsBaseUrl') ?? DEFAULT_OPTIMIZATIONS_BASE_URL;
//                             return baseUrl;
//                         },
//                     },
//                 })
//                 return new OptimizationsApiImpl({ defaultClient });
//             },
//         }),
// })
