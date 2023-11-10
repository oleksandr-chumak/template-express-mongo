import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsStringOrArray(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target: NonNullable<unknown>, propertyKey: string | symbol): void {
    registerDecorator({
      name: 'isStringOrArray',
      target: target.constructor,
      propertyName:
        typeof propertyKey === 'symbol' ? propertyKey.toString() : propertyKey,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown): Promise<boolean> | boolean {
          let parsedValue: unknown = value;
          if (typeof value === 'string'){
            try{
              parsedValue = JSON.parse(value);
            }catch (e){
            }
          }
          return typeof parsedValue === 'string' || Array.isArray(parsedValue);
        },
        defaultMessage(): string {
          return 'Value must be a string or array';
        },
      },
    });
  };
}
