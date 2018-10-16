import calcTotal from './calcTotalPrice';

it('should return correct amount', () => {
  const order = [{
    item: {
      price: 4,
    },
    quantity: 3,
  }]

  const total = calcTotal(order)
  expect(total).toBe(12);
})