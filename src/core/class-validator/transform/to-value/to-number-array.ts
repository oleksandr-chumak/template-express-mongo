import { BadRequestException } from '../../../exception';

export function toNumberArray(value: unknown): number[] | undefined {
  if(value === undefined || value === null){
    return  undefined;
  }

  if (!Array.isArray(value)) {
    throw new BadRequestException(`${value} is not a array`);
  }
  const transformedArray: number[] = [];

  for (const element of value) {
    const numericElement: number = Number(element);

    if (isNaN(numericElement)) {
      throw new BadRequestException(
        `${value} is not a number array ${element} is not a number`
      );
    }
    transformedArray.push(numericElement);
  }
  return transformedArray;
}
