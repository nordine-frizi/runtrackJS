function bissectile(anne) {
    if (anne % 4 === 0 && anne % 100 !== 0 || anne % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bissectile(2020));
console.log(bissectile(2021));
console.log(bissectile(2022));
console.log(bissectile(2023));
console.log(bissectile(2024));
