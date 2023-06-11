export function colorTypeValidator(value: string) {
  return ['primary', 'warning', 'error', 'success', 'info'].includes(value);
}
