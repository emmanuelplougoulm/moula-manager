const arrayOfTransactions = [
  {
    type: 'BUY',
    portfolioId: '19068f7b-310c-4c8f-bbbe-3dbb8dc4aae2',
    price: 10000
  },
  {
    type: 'BUY',
    portfolioId: '19068f7b-310c-4c8f-bbbe-3dbb8dc4aae6',
    price: 20000
  },
  {
    type: 'BUY',
    portfolioId: '19068f7b-310c-4c8f-bbbe-3dbb8dc4aae6',
    price: 30000
  }
];

// const calculateTokenHoldings = (array) => {
//   console.log('array', array);
//   return array.reduce((acc, transaction) => {
//     if (transaction.type === 'BUY') {
//       return acc + transaction.amount;
//     } else {
//       return acc - transaction.amount;
//     }
//   });
// };

// const calculateTokenHoldings = (array) => {
//     let sum = 0;

//     array.forEach((element) => {
//       if (element.type === 'BUY') {
//         return (sum = sum + element.amount);
//       } else {
//         return (sum = sum - element.amount);
//       }
//     });

//     return sum;
//   };

const calculateAvgBuyPrice = (array) => {
  let price = 0;
  let count = 0;

  array.forEach((element) => {
    if (element.type === 'BUY') {
      price = price + element.price;
      count++;
    } else return;
  });

  return price / count;
};

const result = calculateAvgBuyPrice(arrayOfTransactions);

console.log('result', result);
