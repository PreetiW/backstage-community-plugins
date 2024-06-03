import { Apis } from "@backstage-community/plugin-cost-management-client";
import { createApiRef } from "@backstage/core-plugin-api";

export const optimizationsApiRef = createApiRef<Apis.OptimizationsApi>({
  id: 'plugin.cost-management-optimizations.api',
});
