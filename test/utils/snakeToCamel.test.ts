import snakeToCamel from '../../src/utils/snakeToCamel';

describe('snake to camel', () => {
  test('one snake', () => {
    expect(snakeToCamel('user_data')).toBe('userData');
  });

  test('two snakes', () => {
    expect(snakeToCamel('snake_to_camel')).toBe('snakeToCamel');
  });
});
