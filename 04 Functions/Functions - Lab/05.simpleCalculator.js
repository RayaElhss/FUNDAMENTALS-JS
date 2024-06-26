function calculator(numOne, numTwo, operator) {
    const calculator = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    }

    const result = calculator[operator]
    console.log(result(numOne, numTwo));
}

calculator(5, 5, 'add');