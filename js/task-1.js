function slugify(title) {
    return title
        .toLowerCase() // Slug (перетворення рядка до нижнього регістру)
        .split(" ") // перетворення рядка на масив розбивши його за вказаним роздільником ("пробіл")
        .join("-"); // об`єднання елементів масиву в рядок розділені символом ("-")
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"