/*Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 
Наприклад так:
obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Не використовувати методи keys, values, entries
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки*/

function createObject() {
    const myObject = {
        property1: 'Value 1',
        property2: 'Value 2',
        property3: 'Value 3',

        getInfo: function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key}: ${this[key]}`);
                }
            }
        },
    };

    return myObject;
}

const obj = createObject();

obj.getInfo();

obj.newProperty = 'Нова властивість!';

obj.getInfo();
