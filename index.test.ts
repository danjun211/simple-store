import Store from './index';

test('test 1', () => {
  const store = new Store({
    foo: 1,
    bar: 2,
  });

  expect(store.get('foo')).toBe(1);
  expect(store.get('bar')).toBe(2);
  // expect()
});

test('test 2', () => {
  const store = new Store();
  store.set('foo', 1);
  store.set('bar', 2);

  expect(store.get('foo')).toBe(1);
  expect(store.get('bar')).toBe(2);
});
