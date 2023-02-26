import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { report } from 'readme-metric-reporter-express';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './metric-reporter.module-definition';

@Injectable()
export class MetricReporterMiddleware implements NestMiddleware {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    protected readonly options: typeof OPTIONS_TYPE
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    return report({
      baseUrl: this.options.baseUrl,
      createUUID: this.options.createUUID,
      reporter: this.options.reporter,
      collector: this.options.collector,
    })(req, res, next);
  }
}
