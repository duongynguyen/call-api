let initialState = [
  {
    id: 1,
    name: "iPhone 11 Pro",
    price: 1099,
    status: true,
  },
  {
    id: 2,
    name: "Samsung galaxy note 10",
    price: 899,
    status: true,
  },
  {
    id: 3,
    name: "Xiaomi OnePlus",
    price: 599,
    status: false,
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;