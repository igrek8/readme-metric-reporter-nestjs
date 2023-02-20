[readme-metric-reporter-nestjs](../README.md) / [Exports](../modules.md) / MetricReporterModuleOptions

# Interface: MetricReporterModuleOptions

## Table of contents

### Properties

- [baseUrl](MetricReporterModuleOptions.md#baseurl)
- [collector](MetricReporterModuleOptions.md#collector)
- [excludedRoutes](MetricReporterModuleOptions.md#excludedroutes)
- [reporter](MetricReporterModuleOptions.md#reporter)
- [routes](MetricReporterModuleOptions.md#routes)

### Methods

- [createUUID](MetricReporterModuleOptions.md#createuuid)

## Properties

### baseUrl

• `Optional` **baseUrl**: `string`

#### Defined in

[src/metrics-reporter.module-options.ts:11](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L11)

___

### collector

• **collector**: `IMetricCollector`

#### Defined in

[src/metrics-reporter.module-options.ts:8](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L8)

___

### excludedRoutes

• `Optional` **excludedRoutes**: (`string` \| `RouteInfo`)[]

#### Defined in

[src/metrics-reporter.module-options.ts:10](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L10)

___

### reporter

• **reporter**: `IMetricReporter`

#### Defined in

[src/metrics-reporter.module-options.ts:7](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L7)

___

### routes

• **routes**: (`string` \| `RouteInfo`)[]

#### Defined in

[src/metrics-reporter.module-options.ts:9](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L9)

## Methods

### createUUID

▸ `Optional` **createUUID**(`req`, `res`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`string`

#### Defined in

[src/metrics-reporter.module-options.ts:12](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/4a4bf6e/src/metrics-reporter.module-options.ts#L12)
