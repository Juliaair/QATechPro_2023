// 'number' + 3 + 3
let num1 = 'number' + 3 + 3;
console.log("num1", num1); // Вывод: "num1 number33"

// null + 3
let num2 = null + 3;
console.log("num2", num2); // Вывод: "num2 3"

// 5 && "qwerty"
let num3 = 5 && "qwerty";
console.log("num3", num3); // Вывод: "num3 qwerty"

// +'40' + +'2' + "hillel";
let num4 = +'40' + +'2' + "hillel";
console.log("num4", num4); // Вывод: "num4 42hillel"

// '10' - 5 === 6;
let num5 = '10' - 5 === 6;
console.log("num5", num5); // Вывод: "num5 false"

// true + false
let num6 = true + false;
console.log("num6", num6); // Вывод: "num6 1"

// '4px' - 3
let num7 = '4px' - 3;
console.log("num7", num7); // Вывод: "num7 NaN"

// '4' - 3
let num8 = '4' - 3;
console.log("num8", num8); // Вывод: "num8 1"

// '6' + 3 ** 0
let num9 = '6' + 3 ** 0;
console.log("num9", num9); // Вывод: "num9 61"

// 12 / '6':
let num10 = 12 / '6';
console.log("num10", num10); // Вывод: "num10 2"

// '10' + (5 === 6):
let num11 = '10' + (5 === 6);
console.log("num11", num11); // Вывод: "num11 10false"

// null == '':
let num12 = null == '';
console.log("num12", num12); // Вывод: "num12 false"

// 3 ** (9 / 3):
let num13 = 3 ** (9 / 3);
console.log("num13", num13); // Вывод: "num13 27"

// !!'false' == !!'true':
let num14 = !!'false' == !!'true';
console.log("num14", num14); // Вывод: "num14 true"

//0 || '0' && 1:
let num15 = 0 || '0' && 1;
console.log("num15", num15); // Вывод: "num15 1"

// (+null == false) < 1:
let num16 = (+null == false) < 1;
console.log("num16", num16); // Вывод: "num16 false"

// false && true || true:
let num17 = false && true || true;
console.log("num17", num17); // Вывод: "num17 true"

// false && (false || true)
let num18 = false && (false || true);
console.log("num18", num18); // Вывод: "num18 false"

// (+null == false) < 1 ** 5:
let num19 = (+null == false) < 1 ** 5;
console.log("num19", num19); // Вывод: "num19 false"
