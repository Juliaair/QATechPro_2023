/*Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
рядок, до якого буде додаватися символ.
символ, який буде додаватися.
Скільки додавати символів
булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
Умови виконання ДЗ
Функція повина повертати новий рядок*/

function pad(str, char, count, addToStart) {
    const currentLength = str.length;

    if (currentLength >= count) {
        return str;
    }

    const padding = char.repeat(count - currentLength);
    
    return addToStart ? char + str : str + padding;
}

console.log(pad('qwerty', '+', 7, true)); // +qwerty
console.log(pad('qwerty', '+', 10, false)); // qwerty+++++
console.log(pad('qwerty', '+', 6, false)); // qwerty


