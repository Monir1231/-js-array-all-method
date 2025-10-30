
// js find method

// const users =[
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Smith', age: 30},
//     {firstName: 'Emily', lastName: 'Johnson', age: 22},
//     {firstName: 'Michael', lastName: 'Brown', age: 35}
// ]

// const finduser = users.find(user => user.age > 25)
// console.log(finduser)

// const filterusers = users.filter(user => user.age > 25)
// console.log(filterusers)

// some method

const products = [
    {name: 'Laptop', price: 1000, category: 'Electronics'},
    {name: 'Shirt', price: 50, category: 'Clothing'},
    {name: 'Phone', price: 800, category: 'Electronics'},
    {name: 'Pants', price: 70, category: 'Clothing'}
]

// const hasexpensiveitem = products.some(product => product.price > 70);
// console.log(hasexpensiveitem)

const totalprice = products.reduce((acc,product)=> acc + product.price,0)

console.log(`Total price of all products: $${totalprice}`);
