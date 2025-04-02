const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumbers = nums.filter((onlyEven) =>{
    if (onlyEven % 2 === 0) {
        return nums
    }
})

console.log(evenNumbers)