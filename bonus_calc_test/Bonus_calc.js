const calculateBonus = (a, b) => {
let bonus;
const sum = a + b;
debugger; //определены значения a и b, рассчитана сумма
sum > 50 ? (bonus = 50) : (bonus = sum);
debugger; // выполнено условие: бонус равен сумме
return bonus;
};
module.exports = calculateBonus;
