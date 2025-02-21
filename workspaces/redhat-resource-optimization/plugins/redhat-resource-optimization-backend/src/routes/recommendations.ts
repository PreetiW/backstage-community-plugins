/*
 * Copyright 2024 The Backstage Authors
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
import type { RequestHandler } from 'express';
import type { RouterOptions } from '../models/RouterOptions';

export const getRecommendationList: (
  options: RouterOptions,
) => RequestHandler = options => async (_, response) => {
  const { logger, optimizationApi } = options;

  logger.info('getRecommendationList');
  // permission
  // token

  // convert to snakecase
  // const optimizationResponse = await optimizationApi.getRecommendationList({query: _.query}, { token: /*...*/ });
  const optimizationResponse = await optimizationApi.getRecommendationList({
    query: _.query,
  });

  if (optimizationResponse.ok) {
    const responseBody = await optimizationResponse.json();
    // tranform response and send back
    response.json(responseBody);
  } else {
    throw new Error(optimizationResponse.statusText);
  }
};
