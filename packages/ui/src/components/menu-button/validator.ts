import { IconType } from '../icons/types';

export function iconValidator(value: string) {
  return IconType.includes(value);
}

export function typeValidator(value: string) {
  return ['default', 'highlighted', 'ghost', 'completed'].includes(value);
}
