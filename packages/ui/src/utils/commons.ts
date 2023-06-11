export function getErrorText(required: boolean, value: string): string {
  if (required) {
    return !value ? 'Required' : 'Invalid format';
  } else {
    return value.length < 1 ? '' : 'Invalid format';
  }
}
