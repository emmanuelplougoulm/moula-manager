import { IconType } from '../icons/types';

export function iconValidator(value: string) {
  return IconType.includes(value);
}

export function iconPositionValidator(value: string) {
  return ['no-icon', 'icon-only', 'left-icon', 'right-icon'].includes(value);
}

export function sizeValidator(value: string) {
  return ['default', 'large', 'small', 'tiny'].includes(value);
}

export function stateValidator(value: string) {
  return ['enabled', 'hover', 'disabled'].includes(value);
}

export function typeValidator(value: string) {
  return ['primary', 'secondary', 'link'].includes(value);
}
