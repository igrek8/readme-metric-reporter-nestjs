[readme-metric-reporter-nestjs](../README.md) / [Exports](../modules.md) / MetricReporterModule

# Class: MetricReporterModule

## Hierarchy

- `ConfigurableModuleClass`

  ↳ **`MetricReporterModule`**

## Implements

- `OnModuleInit`
- `OnModuleDestroy`
- `NestModule`

## Table of contents

### Methods

- [configure](MetricReporterModule.md#configure)
- [onModuleDestroy](MetricReporterModule.md#onmoduledestroy)
- [onModuleInit](MetricReporterModule.md#onmoduleinit)

### Constructors

- [constructor](MetricReporterModule.md#constructor)

### Properties

- [register](MetricReporterModule.md#register)
- [registerAsync](MetricReporterModule.md#registerasync)

## Methods

### configure

▸ **configure**(`consumer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | `MiddlewareConsumer` |

#### Returns

`void`

#### Implementation of

NestModule.configure

#### Defined in

[src/metric-reporter.module.ts:20](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/c87535c/src/metric-reporter.module.ts#L20)

___

### onModuleDestroy

▸ **onModuleDestroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleDestroy.onModuleDestroy

#### Defined in

[src/metric-reporter.module.ts:15](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/c87535c/src/metric-reporter.module.ts#L15)

___

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

[src/metric-reporter.module.ts:11](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/c87535c/src/metric-reporter.module.ts#L11)

## Constructors

### constructor

• **new MetricReporterModule**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MetricReporterModuleOptions`](../interfaces/MetricReporterModuleOptions.md) & `Partial`<{}\> |

#### Overrides

ConfigurableModuleClass.constructor

#### Defined in

[src/metric-reporter.module.ts:7](https://github.com/igrek8/readme-metric-reporter-nestjs/blob/c87535c/src/metric-reporter.module.ts#L7)

## Properties

### register

▪ `Static` **register**: (`options`: [`MetricReporterModuleOptions`](../interfaces/MetricReporterModuleOptions.md) & `Partial`<{}\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MetricReporterModuleOptions`](../interfaces/MetricReporterModuleOptions.md) & `Partial`<{}\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.register

___

### registerAsync

▪ `Static` **registerAsync**: (`options`: `ConfigurableModuleAsyncOptions`<[`MetricReporterModuleOptions`](../interfaces/MetricReporterModuleOptions.md), ``"create"``\> & `Partial`<{}\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConfigurableModuleAsyncOptions`<[`MetricReporterModuleOptions`](../interfaces/MetricReporterModuleOptions.md), ``"create"``\> & `Partial`<{}\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.registerAsync
