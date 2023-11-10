import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function FirstElementLessOrEqualSecond(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target: NonNullable<unknown>, propertyKey: string | symbol): void {
    registerDecorator({
      name: 'firstElementLessOrEqualSecond',
      target: target.constructor,
      propertyName:
        typeof propertyKey === 'symbol' ? propertyKey.toString() : propertyKey,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: number[]): Promise<boolean> | boolean {
          return value[1] >= value[0];
        },
        defaultMessage(): string {
          return 'First element must be less or equal second';
        },
      },
    });
  };
}
