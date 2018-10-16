interface ICartItem {
  item: {
    price: number;
  }
  quantity: number;
}

export default function calcTotalPrice(cart: ICartItem[]) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
