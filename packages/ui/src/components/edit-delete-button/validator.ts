import { IconType } from '../icons/types';

export function iconValidator(value: string) {
  return IconType.includes(value);
}
