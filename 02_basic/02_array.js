const marvel_heros = ["IronMan", "Spiderman", "Hulk" , "captainAmerica"]

const DC_heros = ["superman", "Batman", "Flash"]
// marvel_heros.push(DC_heros)


// const All_heros = marvel_heros.concat(DC_heros)
// console.log(All_heros);

// const all_new_heros = [...marvel_heros, ...DC_heros]

// const another_arr = [1,2,3,[4,5,6],[7,[8,9]],10];

// const real_another_arr = another_arr.flat(Infinity)

// console.log(real_another_arr);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));