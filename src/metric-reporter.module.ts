import { Inject, MiddlewareConsumer, Module, NestModule, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MetricReporterMiddleware } from './metric-reporter.middleware';
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './metric-reporter.module-definition';

@Module({})
export class MetricReporterModule extends ConfigurableModuleClass implements OnModuleDestroy, OnModuleInit, NestModule {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) protected readonly options: typeof OPTIONS_TYPE) {
    super();
  }

  onModuleInit() {
    this.options.reporter.start();
  }

  onModuleDestroy() {
    this.options.reporter.stop();
  }

  configure(consumer: MiddlewareConsumer) {
    const config = consumer.apply(MetricReporterMiddleware);
    if (this.options.excludedRoutes) config.exclude(...this.options.excludedRoutes);
    config.forRoutes(...this.options.routes);
  }
}
