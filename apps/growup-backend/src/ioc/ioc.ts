import { Container, decorate, injectable, interfaces } from 'inversify';
import {
  makeFluentProvideDecorator,
  makeProvideDecorator,
} from 'inversify-binding-decorators';
import 'reflect-metadata';
import { Controller } from 'tsoa';

decorate(injectable(), Controller);

type Identifier =
  | string
  | symbol
  | interfaces.Newable<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  | interfaces.Abstract<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export const iocContainer = new Container();

export const provide = makeProvideDecorator(iocContainer);
const fluentProvider = makeFluentProvideDecorator(iocContainer);

export const ProvideNamed = (identifier: Identifier, name: string) =>
  fluentProvider(identifier).whenTargetNamed(name).done();

export const ProvideSingleton = (identifier: Identifier) =>
  fluentProvider(identifier).inSingletonScope().done();
