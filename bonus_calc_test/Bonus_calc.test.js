const calculateBonus = require('./Bonus_calc');
describe('Тестирование расчета бонуса', () => {
    it('Расчет бонуса при сумме более 50', () => {
        expect(calculateBonus(30,40)).toBe(50);
    });
    it('Расчет бонуса при сумме менее 50', () => {
        expect(calculateBonus(10,20)).toBe(30);
    });
    it('Расчет бонуса при сумме 50', () => {
        expect(calculateBonus(30,20)).toBe(50);
    });
});