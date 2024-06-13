const myNum = [1,2,3,4]

// const mytotal =  myNum.reduce((acc, currval)=>{
//     console.log(`acc`);
//  return acc + currval
// },0)

// console.log(mytotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "python course",
        price : 3999
    },
    {
        itemName : "mobile dev",
        price : 5999
    },
    {
        itemName : "Data Science",
        price : 15999
    }
]

const pricetoPay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price 
},0)

console.log(pricetoPay);