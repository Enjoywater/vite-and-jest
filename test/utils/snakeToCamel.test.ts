import snakeToCamel from '../../src/utils/snakeToCamel';

describe('snake to camel', () => {
  test('one snake', () => {
    expect(snakeToCamel('user_data')).toEqual('userData');
  });

  test('two snakes', () => {
    expect(snakeToCamel('snake_to_camel')).toEqual('snakeToCamel');
  });
});
