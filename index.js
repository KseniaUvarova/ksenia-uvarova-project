const readlineSync = require('readline-sync');

function calculator() {
  console.log('Простой калькулятор');
  console.log('Доступные операции: +, -, *, /');

  while (true) {
    const num1 = readlineSync.questionFloat('Введите первое число: ');
    const operation = readlineSync.question('Введите операцию (+, -, *, /) или "q" для выхода: ');

    if (operation.toLowerCase() === 'q') {
      console.log('До свидания!');
      break;
    }

    if (!['+', '-', '*', '/'].includes(operation)) {
      console.log('Ошибка: Неверная операция');
      continue;
    }

    const num2 = readlineSync.questionFloat('Введите второе число: ');

    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.log('Ошибка: Деление на ноль невозможно');
          continue;
        }
        result = num1 / num2;
        break;
    }

    console.log(`Результат: ${num1} ${operation} ${num2} = ${result}`);
    console.log('------------------------');
  }
}

calculator();