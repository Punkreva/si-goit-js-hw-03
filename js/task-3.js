function filterArray(numbers, value) {
    const newArray = []; // створення пустого масиву
    for (let i = 0; i < numbers.length; i++) { // цикл (лічильник; умова; пост-вираз)
        if (numbers[i] > value) { // якщо число більше за значення value
            newArray.push(numbers[i]); // то додати число(елемент) в кінець масиву newArray
        }
    }
    return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]