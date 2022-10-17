import { RouteInfo } from '@nestjs/common/interfaces';
import { IMetricReporter } from 'readme-metric-reporter';
import { IMetricCollector } from 'readme-metric-reporter-express';

export interface MetricReporterModuleOptions {
  reporter: IMetricReporter;
  collector: IMetricCollector;
  routes: (string | RouteInfo)[];
  excludedRoutes?: (string | RouteInfo)[];
}
