const cars = [
    {name:"tasla",price:200000,quantity:1},
     {name:"BMW",price:5500000,quantity:2},
      {name:"Honda",price:5600000,quantity:1}
]

// stap 1
const TotalCost = cars.reduce((acc,car)=>acc + car.price * car.quantity,0)
console.log(TotalCost)

// stap 2
const expansiveItem = cars.filter(item => item.price < 200000 )

console.log(expansiveItem)

// stap 3
const items = cars.map(item => item)
console.log(items)