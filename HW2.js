/*Сума вартості послуг
Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
var services = {
   "стрижка": "60 грн",
   "гоління": "80 грн",
   "Миття голови": "100 грн"
};
"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";
Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price*/ 

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбите скло": "200 грн",

    price: function () {
        let total = 0;

        for (const key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                total += parseInt(this[key]);
            }
        }

        return total;
    },

    minPrice: function () {
        let min = Infinity;

        for (const key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                const price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }

        return min;
    },

    maxPrice: function () {
        let max = 0;

        for (const key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн') && key !== "Розбите скло") {
                const price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }

        return max;
    }
};

console.log("Загальна вартість послуг:", services.price(), "грн");
console.log("Мінімальна вартість послуг:", services.minPrice(), "грн");
console.log("Максимальна вартість послуг:", services.maxPrice(), "грн");
