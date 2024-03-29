import { Controller, Module, Post } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ApiResponse, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Metric, MetricReporter, MetricReporterMode } from 'readme-metric-reporter';
import { IMetricCollector } from 'readme-metric-reporter-express';
import { MetricReporterModule } from '..';

/**
 * 1) Get your API key here
 *
 * https://dash.readme.com/project/YOUR_PROJECT/v1/api-key
 */

const API_KEY = 'rdme_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

const reporter = new MetricReporter(API_KEY, {
  buffer: { size: 1 },
  mode: MetricReporterMode.DEVELOPMENT,
});

/**
 * 2) Add error handler in case metrics rejected
 */
reporter.on('error', console.warn);

const collector: IMetricCollector = {
  collect(_req: Request, _res: Response, metric: Metric) {
    // ... perform filtering of sensitive data
    return metric;
  },
};

@Controller()
export class AppController {
  @Post()
  @ApiResponse({ type: String })
  test() {
    return 'data';
  }
}

@Module({
  imports: [
    /**
     * 3) Track usage
     *
     * https://dash.readme.com/project/YOUR_PROJECT/v1/metrics/v2/api-calls
     */
    MetricReporterModule.register({
      reporter,
      collector,
      routes: ['*'],
    }),
  ],
  controllers: [AppController],
})
class AppModule {}

/**
 * Bootstrap
 */

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
})();
