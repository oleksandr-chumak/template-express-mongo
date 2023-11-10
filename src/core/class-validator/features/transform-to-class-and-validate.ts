import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { BadRequestException, InternalServerErrorException } from '../../exception';

export function clearEmptyProperties<T extends object, V extends object>(
  obj: T,
  dto: V
): T {
  for (const key in obj) {
    const value: T[Extract<keyof T, string>] = obj[key];
    if (value === null || value === undefined || !dto.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
}

export async function transformToClassAndValidate<T extends object, V>(
  cls: ClassConstructor<T>,
  plain: V
): Promise<T> {
  let transformedClass: T;
  try {
    transformedClass = plainToInstance(cls, plain);
  } catch (e: unknown) {
    if (e instanceof BadRequestException) {
      throw e;
    } else if (e instanceof Error) {
      throw new InternalServerErrorException(e.message);
    }
    throw new InternalServerErrorException(JSON.stringify(e));
  }

  const validationErrors: ValidationError[] = await validate(transformedClass);

  if (validationErrors.length === 0) {
    return transformedClass;
  }

  const errorObj: Record<string, Record<string, string>> = {};

  for (const validationError of validationErrors) {
    const { property, constraints } = validationError;

    errorObj[property] = { ...constraints };
  }

  throw new BadRequestException(JSON.stringify(errorObj));
}
