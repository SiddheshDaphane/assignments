/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  for (let i=0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price; 
    
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }
  const result = []

  for (let category in categoryTotals) {
    result.push({
      category: category,
      totalSpent: categoryTotals[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;


transactions = [{}]
// const cat = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656080400000,
//     price: 20,
//     category: 'Clothing',
//     itemName: 'T-shirt',
//   },
//   {
//     id: 3,
//     timestamp: 1656084000000,
//     price: 5,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 4,
//     timestamp: 1656087600000,
//     price: 15,
//     category: 'Utilities',
//     itemName: 'Electricity Bill',
//   },
//   {
//     id: 5,
//     timestamp: 1656091200000,
//     price: 30,
//     category: 'Clothing',
//     itemName: 'Jeans',
//   },
// ];


// let a = calculateTotalSpentByCategory(cat);
// console.log(a);