/*BigBoss
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. 
Окрім того, наша компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), 
які вже використовують наше ПО для продажу квитків. Крім цього, ці "дочірні компанії" т
акож можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), 
і так далі і далі
Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.
Вам необхідно написати функцію findValueByKey(companyName),
 яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.*/

 const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, currentCompany) {
    if (currentCompany.name.toLowerCase() === companyName.toLowerCase()) {
        return currentCompany;
    } else if (currentCompany.clients) {
        for (const client of currentCompany.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    } else if (currentCompany.partners) {
        for (const partner of currentCompany.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
        }
    }
}

const companyNameToFind = 'Клієнт 1.2.3';
const foundCompany = findValueByKey(companyNameToFind, company);

if (foundCompany) {
    console.log(`Інформація про компанію ${companyNameToFind}:`, foundCompany);
} else {
    console.log(`Компанію ${companyNameToFind} не знайдено.`);
}
