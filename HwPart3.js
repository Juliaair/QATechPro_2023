/*Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.
Умови виконання ДЗ
Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних: */

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000);
