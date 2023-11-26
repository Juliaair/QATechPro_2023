/* В нас є масив обєктів в яких міститься email
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри.
 Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.*/

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[gmail|yahoo]+\.(com)$/;

var trustedEmails = arr.filter(function (item) {
    return emailRegex.test(item.email);
});

console.log(trustedEmails);

