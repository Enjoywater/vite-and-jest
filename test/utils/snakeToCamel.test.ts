import { snakeToCamel } from '../../src/utils/snakeToCamel';

test.each([
  ['user_data', 'userData'],
  ['snake_to_camel', 'snakeToCamel'],
  ['snake_to_camel_good', 'snakeToCamelGood'],
])('a', (a, expected) => {
  expect(snakeToCamel(a)).toBe(expected);
});
