function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

getArray()
    .then((arr) => {
        const evenNumbers = arr.filter((num) => num % 2 === 0);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent =
                    JSON.stringify(evenNumbers);
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent =
                    JSON.stringify(doubledNumbers);
                resolve(doubledNumbers);
            }, 2000);
        });
    });