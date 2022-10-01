import { ConfigurableModuleBuilder } from '@nestjs/common';
import { MetricReporterModuleOptions } from './metrics-reporter.module-options';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<MetricReporterModuleOptions>().build();
