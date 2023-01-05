const snakeToCamel = (value: string) =>
  value.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));

export default snakeToCamel;
