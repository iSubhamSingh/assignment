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

// transactions = [{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// },

// {
//   id: 2,
//   timestamp: 1659076800000,
//   price: 200,
//   category: 'Electronic',
//   itemName: 'Phone',
// },

// {
//   id: 3,
//   timestamp: 1656976800000,
//   price: 15,
//   category: 'Food',
//   itemName: 'Pasta',
// },
// {
//   id: 4,
//   timestamp: 1656178800000,
//   price: 20,
//   category: 'Food ',
//   itemName: 'Hamburger',
// }
// ]

function calculateTotalSpentByCategory(transactions) {
  let list = [];
  let map = {};

  for(let i = 0; i < transactions.length; i++){
    let currentCategory = transactions[i].category.trim();
    if(currentCategory in map){

      let price = map[currentCategory] ;
      map[currentCategory] = transactions[i].price + price;
      
    }
    else{
      map[currentCategory] = transactions[i].price;
    }
    
  }
 
  for(let key in map){
    list.push({
      category: key , totalSpent: map[key]
    })
  }
  
  return list;
}

// console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
