import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MetricReporter } from 'readme-metric-reporter';
import request from 'supertest';
import { MetricReporterModule } from './metric-reporter.module';

jest.mock('os', () => ({
  ...jest.requireActual('os'),
  type: jest.fn().mockReturnValue('darwin'),
  release: jest.fn().mockReturnValue('10.0.0'),
}));

jest.useFakeTimers();
jest.setSystemTime(new Date('2022-01-01'));

describe('MetricReporterModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MetricReporterModule.register({
          reporter: new MetricReporter('apiKey'),
          collector: { collect: (_req, _res, metric) => ({ ...metric, _id: '1' }) },
          routes: ['*'],
          excludedRoutes: ['/health'],
        }),
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.listen(50000);
  });

  afterAll(async () => {
    await app.close();
  });

  it('tracks a request', async () => {
    const report = jest.spyOn(MetricReporter.prototype, 'report');
    report.mockImplementation(async () => {});
    await request(app.getHttpServer()).post('/404').send({ ping: 'text' });
    expect(report.mock.calls[0]?.[0]).toMatchSnapshot();
  });
});
