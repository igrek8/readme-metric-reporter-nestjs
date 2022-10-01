# Report Nest.js API usage metrics to [README.com](https://docs.readme.com/docs/api-metrics-in-readme)

Collect and publish Nest.js API usage metrics to README.io

[![NPM](https://badgen.net/npm/v/readme-metric-reporter-nestjs)](https://www.npmjs.com/readme-metric-reporter-nestjs)
[![Coverage Status](https://coveralls.io/repos/github/igrek8/readme-metric-reporter-nestjs/badge.svg?branch=main)](https://coveralls.io/github/igrek8/readme-metric-reporter-nestjs?branch=main)
![Release](https://badgen.net/github/checks/igrek8/readme-metric-reporter-nestjs)
![License](https://badgen.net/github/license/igrek8/readme-metric-reporter-nestjs)

## Installation

```bash
npm install --save readme-metric-reporter-nestjs

yarn add readme-metric-reporter-nestjs
```

## View in the dashboard

<details>
  <summary>Review a request metric</summary>
  <img alt="dashboard" src="./docs/images/readme-view-api-log.png" />
</details>

## Integration

```ts
import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { Metric, MetricReporter, MetricReporterMode } from 'readme-metric-reporter';
import { IMetricCollector } from 'readme-metric-reporter-express';
import { MetricReporterModule } from 'readme-metric-reporter-nestjs';

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
      // Specify routes to track
      configure: (middleware) => middleware.forRoutes('*'),
    }),
  ],
})
class AppModule {}

/**
 * Bootstrap
 */

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
})();
```
