/*Написати свою реалізацію функції isNaN. 
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
Не викорисутовувати isNaN/ Number.isNaN*/

function myIsNaN(value) {
    return typeof value === 'number' && value !== value;
}

console.log(myIsNaN(5));        
console.log(myIsNaN('string')); 
console.log(myIsNaN(NaN));      
console.log(myIsNaN(undefined));
